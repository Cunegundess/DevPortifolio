import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TbFileDownload } from "react-icons/tb";

function DownloadCV() {
  const [t] = useTranslation("translation");

  return (
    <a href={t("CV")} download>
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
        }}
        whileTap={{ scale: 0.9 }}
        className="inline-flex justify-center items-center text-center font-bold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white p-4 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl gap-2 my-10"
      >
        <motion.span
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{
            duration: 1.5,
            repeatType: "loop",
            repeat: Infinity,
          }}
        >
          <TbFileDownload size={25} className="text-white" />
        </motion.span>
        <span>{t("WorkPage.text_button")}</span>
      </motion.button>
    </a>
  );
}

export default DownloadCV;
