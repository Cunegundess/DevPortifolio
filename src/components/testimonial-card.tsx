import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
  emoji?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
  emoji = "⭐",
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card dark:bg-card/80 hover:shadow-lg transition-all duration-300"
    >
      {/* Rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-lg" aria-hidden="true">
            ⭐
          </span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="relative">
        <p className="text-foreground/80 dark:text-foreground/80 text-sm leading-relaxed italic">
          "{quote}"
        </p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <p className="font-semibold text-primary dark:text-primary-foreground">
            {author}
          </p>
          <p className="text-xs text-foreground/70 dark:text-foreground/70">
            {role}
            {company && ` • ${company}`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
