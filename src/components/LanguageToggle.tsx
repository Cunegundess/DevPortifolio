/* eslint-disable @typescript-eslint/no-unused-vars */
import i18n from "@/utils/i18n";
import { motion } from "framer-motion";

function LanguageToggle() {
  function changeLang(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <motion.button
        onClick={() => changeLang("pt")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="images/brazil-flag-icon-32.png"></img>
      </motion.button>
      <motion.button
        onClick={() => changeLang("en")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="images/united-states-of-america-flag-icon-32.png"></img>
      </motion.button>
    </>
  );
}

export default LanguageToggle;