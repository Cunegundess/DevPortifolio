import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function DownloadCV() {
  const [t] = useTranslation("translation");

  //   function handleDownload() {
  //     const pdfURL = "public/LucasCunegundes-Currículo.pdf";

  //     window.open(pdfURL, "_blank");
  //   }

  return (
    <a href={t("CV")} download>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        //   onClick={handleDownload}
        className="self-center font-bold bg-blue-500 text-white p-2 text-sm rounded-md hover:bg-blue-600 transition my-5"
      >
        {t("WorkPage.text_button")}
      </motion.button>
    </a>
  );
}

export default DownloadCV;
