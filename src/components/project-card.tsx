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
      className="flex flex-col gap-6 p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 bg-slate-50 dark:bg-slate-900 hover:shadow-lg"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl" aria-hidden="true">
              {emoji}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {title}
            </h3>
          </div>
          {impact && (
            <p className="text-sm font-semibold text-green-600 dark:text-green-400">
              ✨ {impact}
            </p>
          )}
        </div>

        {/* Action Links */}
        <div className="flex gap-2">
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title} live demo`}
              className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <PiGlobeBold size={20} />
            </motion.a>
          )}
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} on GitHub`}
            className="p-2 rounded-lg bg-slate-700 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithubAlt size={20} />
          </motion.a>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        {description}
      </p>

      {/* Image */}
      {image && (
        <div className="relative w-full h-64 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <Badge
            key={idx}
            className="text-xs text-black dark:text-white bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
