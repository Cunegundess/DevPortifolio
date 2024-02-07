import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithubAlt } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { Badge } from "../ui/badge";

function Bibliotech() {
  const [t] = useTranslation("translation");
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col lg:w-1/2 mx-5 justify-center">
        <h2 className="flex flex-row items-center text-3xl font-bold gap-1">
          <a
            href="https://github.com/Cunegundess/Bibliotech"
            target="_blank"
            className="hover:text-blue-500 hover:underline hover:decoration-3 inline-flex items-center gap-1"
          >
            Bibliotech <HiLink size={20} />
          </a>{" "}
          <motion.a
            href="https://www.github.com/Cunegundess/Bibliotech"
            target="_blank"
            className="flex gap-1 drop-shadow-lg p-1 h-fit w-fit "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithubAlt className="text-black dark:text-white " size={25} />
          </motion.a>
        </h2>

        <p className="lg:text-left text-medium leading-[25px] py-4">
          {t("ProjectsPage.bibliotech_description")}
        </p>
        <div className="flex gap-5 items-center justify-center pt-2">
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
      <div className="lg:w-1/2">
        <img
          className="w-full h-full rounded-lg shadow-xl"
          src="images/bibliotech.png"
        />
      </div>
    </div>
  );
}

export default Bibliotech;
