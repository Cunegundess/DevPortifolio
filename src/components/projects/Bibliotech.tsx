import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithubAlt } from "react-icons/fa";
import { PiGlobeBold } from "react-icons/pi";
import { Badge } from "../ui/badge";

function Bibliotech() {
  const [t] = useTranslation("translation");
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mx-5 justify-center">
        <h2 className="flex flex-col text-3xl font-extrabold gap-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700">
          Bibliotech
        </h2>
        <span className="flex flex-row items-center gap-1 ">
          <PiGlobeBold className="text-gray-400 dark:text-gray-500" size={30} />
          <motion.a
            href="https://www.github.com/Cunegundess/Bibliotech"
            target="_blank"
            className="flex gap-1 drop-shadow-lg p-1 h-fit w-fit hover:text-cyan-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithubAlt size={30} />
          </motion.a>
        </span>
        <p className="text-left font-light leading-[25px] py-5">
          {t("ProjectsPage.bibliotech_description")}
        </p>
        <div className="flex justify-center items-center">
          <img
            className="h-full w-full md:h-3/4 md:w-3/4 lg:h-3/4 lg:w-3/4 bg-transparent"
            src="images/bibliotech.png"
          />
        </div>
        <div className="flex gap-5 items-center justify-center pt-5">
          <Badge className="text-black bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 transition shadow-lg text-center">
            Django
          </Badge>
          <Badge className="text-black bg-red-600 hover:bg-red-700 dark:hover:bg-red-700 transition shadow-lg text-center">
            Django REST
          </Badge>
          <Badge className="text-black bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 transition shadow-lg text-center">
            PostgreSQL
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Bibliotech;
