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
      className="flex flex-col sm:flex-row gap-3 w-fit mx-auto"
    >
      <a href={`/#${t("Navbar.Contact")}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-lg">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span>{t("Navbar.Contact")}</span>
          <HiArrowRight className="text-lg" aria-hidden="true" />
        </motion.button>
      </a>

      <a href={`/#${t("Navbar.Projects")}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-lg">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex justify-center items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-300"
        >
          <span>{t("Navbar.Projects")}</span>
          <HiArrowRight className="text-lg" aria-hidden="true" />
        </motion.button>
      </a>
    </motion.div>
  );
}
