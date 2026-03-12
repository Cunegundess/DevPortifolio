import { motion } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  icon?: string;
  helper?: string;
}

interface SocialProofProps {
  stats: StatProps[];
}

export function SocialProof({ stats }: SocialProofProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch w-full py-6"
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="flex flex-col items-start gap-3 text-left bg-card dark:bg-card/80 border border-border rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-300 min-w-[220px]"
        >
          {stat.icon && (
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-semibold" aria-hidden="true">
              {stat.icon}
            </span>
          )}
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">
              {stat.value}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {stat.label}
            </p>
            {stat.helper && (
              <p className="text-xs md:text-sm text-foreground/70 dark:text-foreground/80">
                {stat.helper}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
