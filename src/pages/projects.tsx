import Bibliotech from "@/components/projects/bibliotech";
import CompanyHub from "@/components/projects/company-hub";
import { GitHubPinnedGrid } from "@/components/projects/github-pinned-grid";
import SocialMediaDashboard from "@/components/projects/social-media-dashboard";
import UnderConstruction from "@/components/projects/under-construction";
import { GITHUB_CONFIG } from "@/data/github-config";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ProjectsPage() {
  const [t] = useTranslation("translation");
  const useGitHubIntegration = GITHUB_CONFIG.isConfigured();

  return (
    <section id={t("Navbar.Projects")} className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ opacity: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col gap-12">
          {/* Section Title */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <span className="text-4xl md:text-5xl">🚀</span>
              <h1 id="projects-title" className="text-4xl md:text-5xl font-bold text-primary">
                {t("ProjectsPage.title")}
              </h1>
            </div>
            <p className="text-foreground/70 dark:text-foreground/80 max-w-2xl text-base md:text-lg">
              {useGitHubIntegration
                ? "Meus repositórios mais importantes fixados no GitHub, atualizados automaticamente."
                : t("ProjectsPage.description") || "A showcase of my recent projects and works that demonstrate my expertise in full-stack development, backend engineering, and problem-solving."
              }
            </p>
          </div>

          {/* Projects Content */}
          {useGitHubIntegration ? (
            // Modo 1: Repositórios do GitHub (Dinâmico)
            <div className="mt-4">
              <GitHubPinnedGrid />
            </div>
          ) : (
            // Modo 2: Projetos Estáticos (Fallback)
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            {/* Main Projects - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SocialMediaDashboard />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Bibliotech />
            </motion.div>

            {/* Additional Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CompanyHub />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <UnderConstruction />
            </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectsPage;
