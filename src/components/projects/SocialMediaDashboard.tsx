import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithubAlt } from "react-icons/fa";
import { PiGlobeBold } from "react-icons/pi";
import { Badge } from "../ui/badge";

function SocialMediaDashboard() {
  const [t] = useTranslation("translation");
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col lg:w-1/2 mx-5 justify-center">
        <h2 className="flex flex-col text-3xl font-bold gap-1">
          Social Media Dashboard
          <span className="flex flex-row items-center gap-1">
            <motion.a
              href="https://socialdashboardmedia.netlify.app/"
              target="_blank"
              className="hover:text-blue-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <PiGlobeBold size={30} />
            </motion.a>
            <motion.a
              href="https://www.github.com/Cunegundess/SocialMediaDashboard"
              target="_blank"
              className="flex gap-1 drop-shadow-lg p-1 h-fit w-fit hover:text-blue-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithubAlt size={30} />
            </motion.a>
          </span>
        </h2>

        <p className="lg:text-left text-medium leading-[25px] py-4">
          {t("ProjectsPage.social_media_dashboard_description")}
        </p>
        <div className="flex gap-5 items-center justify-center pt-2">
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

      <div className="lg:w-1/2">
        <img
          className="w-full h-full rounded-lg shadow-xl"
          src="images/socialmediadashboard.png"
        />
      </div>
    </div>
  );
}

export default SocialMediaDashboard;
