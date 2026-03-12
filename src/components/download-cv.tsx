import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TbFileDownload } from "react-icons/tb";

function DownloadCV() {
  const [t] = useTranslation("translation");

  return (
    <a href={t("CV")} download>
      <motion.button
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 20px 40px rgba(6, 182, 212, 0.3)",
        }}
        whileTap={{ scale: 0.92 }}
        className="inline-flex justify-center items-center text-center font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-accent-foreground px-8 py-4 rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl gap-3 group relative overflow-hidden mt-2"
      >
        {/* Shine effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 -skew-x-12"></div>
        
        <motion.span
          animate={{ scale: [0.9, 1.15, 0.9] }}
          transition={{
            duration: 2,
            repeatType: "loop",
            repeat: Infinity,
          }}
          className="relative z-10"
        >
          <TbFileDownload size={24} className="text-accent-foreground" />
        </motion.span>
        <span className="relative z-10 text-lg font-semibold">{t("WorkPage.text_button")}</span>
      </motion.button>
    </a>
  );
}

export default DownloadCV;
