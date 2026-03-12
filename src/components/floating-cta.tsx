import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HiChat } from "react-icons/hi";

export function FloatingCTA() {
  const [t] = useTranslation("translation");
  const contactId = t("Navbar.Contact");

  return (
    <motion.a
      href={`/#${contactId}`}
      className="fixed bottom-8 right-8 w-16 h-16 bg-accent hover:bg-accent/90 dark:bg-accent dark:hover:bg-accent/90 rounded-full flex items-center justify-center text-accent-foreground shadow-lg lg:hidden z-40 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={t("ContactPage.aria_send")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <HiChat className="text-2xl" />
    </motion.a>
  );
}
