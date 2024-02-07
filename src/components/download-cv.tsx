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
        whileTap={{ scale: 0.95 }}
        className="inline-flex justify-center items-center text-center font-bold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-cyan-500 hover:to-blue-600 text-white p-4 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl gap-2 mt-5"
      >
        <TbFileDownload size={25} className="text-white" />
        <span>{t("WorkPage.text_button")}</span>
      </motion.button>
    </a>
  );
}

export default DownloadCV;
