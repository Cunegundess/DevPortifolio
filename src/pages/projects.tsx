import Bibliotech from "@/components/projects/bibliotech";
import CompanyHub from "@/components/projects/company-hub";
import SocialMediaDashboard from "@/components/projects/social-media-dashboard";
import UnderConstruction from "@/components/projects/under-construction";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ProjectsPage() {
  const [t] = useTranslation("translation");

  return (
    <section id={t("Navbar.Projects")} className="py-20 px-5 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ opacity: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col gap-8">
          {/* Section Title */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold" aria-labelledby="projects-title">
              <span className="drop-shadow-lg text-3xl md:text-4xl">🚀</span>{" "}
              <span id="projects-title">{t("ProjectsPage.title")}</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              A showcase of my recent projects and works that demonstrate my expertise in full-stack development, backend engineering, and problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
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
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectsPage;
