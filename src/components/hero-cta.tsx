import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HiArrowRight } from "react-icons/hi";

export function HeroCTA() {
  const [t] = useTranslation("translation");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4 w-fit mx-auto"
    >
      <a href={`/#${t("Navbar.Contact")}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-lg">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-accent-foreground font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span>{t("Navbar.Contact")}</span>
          <HiArrowRight className="text-lg" aria-hidden="true" />
        </motion.button>
      </a>

      <a href={`/#${t("Navbar.Projects")}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-lg">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex justify-center items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>{t("Navbar.Projects")}</span>
          <HiArrowRight className="text-lg" aria-hidden="true" />
        </motion.button>
      </a>
    </motion.div>
  );
}
