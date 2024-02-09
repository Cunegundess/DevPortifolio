import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithubAlt } from "react-icons/fa";
import { PiGlobeBold } from "react-icons/pi";
import { Badge } from "../ui/badge";

function SocialMediaDashboard() {
  const [t] = useTranslation("translation");
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mx-5 justify-center">
        <h2 className="flex flex-col text-3xl font-extrabold gap-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700">
          Social Media Dashboard
        </h2>
        <span className="flex flex-row items-center gap-1">
          <motion.a
            href="https://socialdashboardmedia.netlify.app/"
            target="_blank"
            className="hover:text-cyan-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <PiGlobeBold size={30} />
          </motion.a>
          <motion.a
            href="https://www.github.com/Cunegundess/SocialMediaDashboard"
            target="_blank"
            className="flex gap-1 drop-shadow-lg p-1 h-fit w-fit hover:text-cyan-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithubAlt size={30} />
          </motion.a>
        </span>
        <p className="text-left font-light leading-[25px] py-5">
          {t("ProjectsPage.social_media_dashboard_description")}
        </p>
        <div className="flex justify-center items-center ">
          <img
            className="w-full h-full md:w-3/4 md:h-3/4 lg:w-3/4 lg:h-3/4 bg-transparent"
            src="images/socialmediadashboard-mockup.png"
          />
        </div>
        <div className="flex gap-5 items-center justify-center pt-5">
          <Badge className="text-black bg-cyan-400 hover:bg-cyan-500 shadow-xl text-center">
            ReactJS
          </Badge>
          <Badge className="text-black bg-blue-500 hover:bg-blue-600 shadow-xl text-center">
            Typescript
          </Badge>
          <Badge className="text-black bg-purple-500 hover:bg-purple-600 shadow-xl text-center">
            SCSS
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaDashboard;
