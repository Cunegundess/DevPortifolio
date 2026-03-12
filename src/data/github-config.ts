// Configurações da API GitHub
export const GITHUB_CONFIG = {
  API_URL: 'https://api.github.com/graphql',
  TOKEN: import.meta.env.VITE_GITHUB_TOKEN,
  USERNAME: import.meta.env.VITE_GITHUB_USERNAME,
  
  // Validar se as variáveis estão configuradas
  isConfigured: () => {
    return !!(import.meta.env.VITE_GITHUB_TOKEN && import.meta.env.VITE_GITHUB_USERNAME);
  }
};

// Tipo para repositórios
export interface GitHubRepository {
  id: string;
  name: string;
  description: string | null;
  url: string;
  imageUrl?: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  topics: string[];
}
