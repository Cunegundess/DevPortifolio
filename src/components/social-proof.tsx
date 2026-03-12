import { motion } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  icon?: string;
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
      className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center w-full py-8"
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-center"
        >
          {stat.icon && (
            <span className="text-3xl mb-2" aria-hidden="true">
              {stat.icon}
            </span>
          )}
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">
            {stat.value}
          </p>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
