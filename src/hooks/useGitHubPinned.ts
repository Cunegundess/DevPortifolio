import { GITHUB_CONFIG, GitHubRepository } from '@/data/github-config';
import { useQuery } from '@tanstack/react-query';

// Função para extrair primeira imagem do README
const extractImageFromReadme = (readmeContent: string): string | null => {
  if (!readmeContent) return null;
  
  // Tenta encontrar markdown image: ![alt](url)
  const markdownMatch = readmeContent.match(/!\[.*?\]\((.*?)\)/);
  if (markdownMatch?.[1]) {
    return markdownMatch[1];
  }
  
  // Tenta encontrar HTML image: <img src="url">
  const htmlMatch = readmeContent.match(/<img[^>]+src=["']([^"']+)["']/);
  if (htmlMatch?.[1]) {
    return htmlMatch[1];
  }
  
  return null;
};

// Função para converter URL relativa em absoluta
const resolveImageUrl = (imageUrl: string, repoUrl: string): string => {
  if (!imageUrl) return '';
  if (imageUrl.startsWith('http')) return imageUrl;
  
  // Remover barra final da URL do repo
  const baseUrl = repoUrl.replace(/\/$/, '');
  return `${baseUrl}/raw/main/${imageUrl}`;
}

const PINNED_QUERY = `
  query {
    user(login: "${GITHUB_CONFIG.USERNAME}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
            repositoryTopics(first: 5) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface GitHubGraphQLResponse {
  data?: {
    user?: {
      pinnedItems?: {
        nodes: any[];
      };
    };
  };
  errors?: Array<{
    message: string;
  }>;
}

export const useGitHubPinned = () => {
  return useQuery({
    queryKey: ['github-pinned-repositories'],
    queryFn: async (): Promise<GitHubRepository[]> => {
      // Validar configuração
      if (!GITHUB_CONFIG.isConfigured()) {
        throw new Error('GitHub não está configurado. Verifique as variáveis de ambiente.');
      }

      const response = await fetch(GITHUB_CONFIG.API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GITHUB_CONFIG.TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: PINNED_QUERY,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro na API GitHub: ${response.statusText}`);
      }

      const result: GitHubGraphQLResponse = await response.json();

      // Verificar erros da API
      if (result.errors) {
        throw new Error(`Erro GraphQL: ${result.errors[0]?.message || 'Desconhecido'}`);
      }

      // Transformar dados
      let repositories = result.data?.user?.pinnedItems?.nodes?.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.url,
        imageUrl: null as string | null,
        stargazerCount: repo.stargazerCount,
        forkCount: repo.forkCount,
        primaryLanguage: repo.primaryLanguage ? {
          name: repo.primaryLanguage.name,
          color: repo.primaryLanguage.color,
        } : null,
        topics: repo.repositoryTopics?.nodes?.map((t: any) => t.topic.name) || [],
      })) || [];
      
      // Buscar imagens dos READMEs em paralelo
      await Promise.all(
        repositories.map(async (repo) => {
          try {
            const readmeUrl = `https://api.github.com/repos/${GITHUB_CONFIG.USERNAME}/${repo.name}/readme`;
            const readmeResponse = await fetch(readmeUrl, {
              headers: {
                'Authorization': `Bearer ${GITHUB_CONFIG.TOKEN}`,
                'Accept': 'application/vnd.github.v3.raw',
              },
            });
            
            if (readmeResponse.ok) {
              const readmeContent = await readmeResponse.text();
              const imageUrl = extractImageFromReadme(readmeContent);
              
              if (imageUrl) {
                // Converter URL relativa para absoluta
                repo.imageUrl = resolveImageUrl(imageUrl, repo.url);
              }
            }
          } catch (error) {
            // Silenciar erros ao buscar README
            console.debug(`Não foi possível buscar README para ${repo.name}`);
          }
        })
      );

      return repositories;
    },
    staleTime: 1000 * 60 * 60, // 1 hora
    gcTime: 1000 * 60 * 60 * 24, // 24 horas
    retry: 2,
    retryDelay: 1000,
  });
};
