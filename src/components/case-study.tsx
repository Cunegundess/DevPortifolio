import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

interface CaseStudySection {
  title: string;
  content: string;
}

interface CaseStudyProps {
  projectName: string;
  description: string;
  heroImage?: string;
  problemStatement: string;
  solutionApproach: string;
  keyFeatures: string[];
  technologies: string[];
  results: Array<{
    metric: string;
    value: string;
    description?: string;
  }>;
  sections?: CaseStudySection[];
  liveLink?: string;
  githubLink?: string;
  emoji?: string;
}

export function CaseStudy({
  projectName,
  description,
  heroImage,
  problemStatement,
  solutionApproach,
  keyFeatures,
  technologies,
  results,
  sections,
  liveLink,
  githubLink,
  emoji = "📊",
}: CaseStudyProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Hero Section */}
      <header className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Title */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl" aria-hidden="true">
              {emoji}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-foreground">
              {projectName}
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl text-foreground/70 dark:text-foreground/80 mb-6">
            {description}
          </p>

          {/* Hero Image */}
          {heroImage && (
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8 bg-secondary dark:bg-secondary/50 border border-border">
              <img
                src={heroImage}
                alt={`${projectName} hero screenshot`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 mb-8">
            {liveLink && (
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live Demo
              </motion.a>
            )}
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-primary dark:hover:bg-primary/80 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub
              </motion.a>
            )}
          </div>
        </motion.div>
      </header>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Problem Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-foreground mb-4">
            🎯 Problem Statement
          </h2>
          <p className="text-foreground/80 dark:text-foreground/90 text-lg leading-relaxed">
            {problemStatement}
          </p>
        </motion.section>

        {/* Solution Approach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-foreground mb-4">
            💡 Solution Approach
          </h2>
          <p className="text-foreground/80 dark:text-foreground/90 text-lg leading-relaxed">
            {solutionApproach}
          </p>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-foreground mb-4">
            ✨ Key Features
          </h2>
          <ul className="space-y-3">
            {keyFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-foreground/80 dark:text-foreground/90"
              >
                <span className="text-accent font-bold mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-foreground mb-4">
            🛠️ Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <Badge
                key={idx}
                className="text-sm bg-accent/10 dark:bg-accent/15 text-accent border border-accent/30 hover:bg-accent/20 dark:hover:bg-accent/25 transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-foreground mb-4">
            📈 Results & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-gradient-to-br from-accent/5 to-secondary dark:from-accent/10 dark:to-background border border-accent/20"
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  {result.value}
                </div>
                <div className="font-semibold text-primary dark:text-primary-foreground">
                  {result.metric}
                </div>
                {result.description && (
                  <p className="text-sm text-foreground/70 dark:text-foreground/80 mt-1">
                    {result.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Additional Sections */}
        {sections &&
          sections.map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-foreground/80 dark:text-foreground/90 text-lg leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 p-8 rounded-lg bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-center shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-2">
          Interested in working together?
        </h3>
        <p className="mb-4 text-accent-foreground/90">Let's discuss how we can build something amazing.</p>
        <motion.a
          href="/#contact"
          className="inline-block px-8 py-3 bg-accent-foreground text-accent rounded-lg font-bold transition-colors hover:bg-accent-foreground/90 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </article>
  );
}
