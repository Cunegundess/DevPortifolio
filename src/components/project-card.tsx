import { motion } from "framer-motion";
import { FaGithubAlt } from "react-icons/fa";
import { PiGlobeBold } from "react-icons/pi";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveLink?: string;
  githubLink: string;
  impact?: string; // e.g., "Improved by 80%"
  emoji?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
  impact,
  emoji = "🚀",
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 p-8 rounded-2xl border border-border bg-card dark:bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] dark:hover:shadow-[0_8px_30px_rgba(6,182,212,0.2)] transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              {emoji}
            </span>
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-primary-foreground">
                {title}
              </h3>
              {impact && (
                <p className="text-xs font-semibold text-accent mt-1 flex items-center gap-1">
                  <span>✨</span> {impact}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex gap-2 flex-shrink-0">
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title} live demo`}
              className="p-2.5 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent font-semibold"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <PiGlobeBold size={18} />
            </motion.a>
          )}
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} on GitHub`}
            className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary font-semibold"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithubAlt size={18} />
          </motion.a>
        </div>
      </div>

      {/* Description */}
      <p className="text-foreground/70 dark:text-foreground/80 text-sm md:text-base leading-relaxed">
        {description}
      </p>

      {/* Image */}
      {image && (
        <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden bg-secondary dark:bg-secondary/50 border border-border">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-2">
        {technologies.map((tech, idx) => (
          <Badge
            key={idx}
            className="text-xs px-3 py-1.5 bg-accent/10 dark:bg-accent/15 text-accent border border-accent/30 hover:bg-accent/20 dark:hover:bg-accent/25 transition-all duration-300 font-medium"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
