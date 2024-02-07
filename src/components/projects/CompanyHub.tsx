import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithubAlt } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { Badge } from "../ui/badge";

function CompanyHub() {
  const [t] = useTranslation("translation");
  return (
    <div className="flex gap-10">
      <div className="flex flex-col w-1/2 mx-5 justify-center">
        <h2 className="flex flex-row items-center text-3xl font-bold gap-1">
          <a
            href="https://github.com/Cunegundess/CompanyHub"
            target="_blank"
            className="hover:text-blue-500 hover:underline hover:decoration-3 inline-flex items-center gap-1"
          >
            CompanyHub <HiLink size={20} />
          </a>{" "}
          <motion.a
            href="https://www.github.com/Cunegundess/CompanyHub"
            target="_blank"
            className="flex gap-1 drop-shadow-lg p-1 h-fit w-fit "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithubAlt className="text-black dark:text-white " size={25} />
          </motion.a>
        </h2>

        <p className="lg:text-left text-medium leading-[25px] py-4">
          {t("ProjectsPage.company_hub_description")}
        </p>
        <div className="flex gap-5 items-center justify-center pt-2">
          <Badge className="text-black bg-cyan-300 hover:bg-cyan-400 dark:hover:bg-cyan-500 transition shadow-lg text-center">
            ReactJS
          </Badge>
          <Badge className="text-black bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600 transition shadow-lg text-center">
            Typescript
          </Badge>
          <Badge className="text-black bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-500 transition shadow-lg text-center">
            TailwindCSS
          </Badge>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="w-full h-full rounded-lg shadow-xl"
          src="images/companyhub.png"
        />
      </div>
    </div>
  );
}

export default CompanyHub;
