import { ProjectCard } from '@/components/project-card';
import { useGitHubPinned } from '@/hooks/useGitHubPinned';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

export function GitHubPinnedGrid() {
  const { data: repositories, isLoading, error } = useGitHubPinned();

  // Estado de carregamento
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="animate-spin text-accent" size={40} />
        <span className="ml-3 text-foreground/70 dark:text-foreground/80">
          Carregando repositórios...
        </span>
      </div>
    );
  }

  // Estado de erro
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg border-2 border-red-500 bg-red-50 dark:bg-red-950/30"
      >
        <p className="text-red-700 dark:text-red-300 font-semibold">
          ⚠️ Erro ao carregar repositórios
        </p>
        <p className="text-sm text-red-600 dark:text-red-400 mt-2">
          {error instanceof Error ? error.message : 'Erro desconhecido'}
        </p>
        <p className="text-xs text-red-600 dark:text-red-400 mt-3">
          Verifique as variáveis de ambiente: <code className="bg-red-100 dark:bg-red-900 px-2 py-1 rounded">VITE_GITHUB_TOKEN</code> e <code className="bg-red-100 dark:bg-red-900 px-2 py-1 rounded">VITE_GITHUB_USERNAME</code>
        </p>
      </motion.div>
    );
  }

  // Sem repositórios fixados
  if (!repositories || repositories.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg border border-border bg-secondary dark:bg-card/50 text-center"
      >
        <p className="text-foreground/70 dark:text-foreground/80">
          Nenhum repositório fixado encontrado. Fixe repositórios no seu perfil GitHub!
        </p>
      </motion.div>
    );
  }

  // Grid com repositórios
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {repositories.map((repo, index) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <ProjectCard
            title={repo.name}
            description={repo.description || 'Sem descrição'}
            image={repo.imageUrl || undefined}
            technologies={
              repo.primaryLanguage
                ? [repo.primaryLanguage.name, ...repo.topics]
                : repo.topics
            }
            githubLink={repo.url}
            emoji={getEmojiForLanguage(repo.primaryLanguage?.name)}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Função auxiliar para selecionar emoji baseado na linguagem
function getEmojiForLanguage(language?: string): string {
  const emojiMap: Record<string, string> = {
    'TypeScript': '📘',
    'JavaScript': '📕',
    'Python': '🐍',
    'Java': '☕',
    'Go': '🐹',
    'Rust': '🦀',
    'C++': '⚙️',
    'React': '⚛️',
    'Vue': '💚',
    'Node.js': '🟢',
  };

  return emojiMap[language || ''] || '🚀';
}
