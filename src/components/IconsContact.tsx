import { motion } from "framer-motion";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

function IconsContact() {
  return (
    <div className="flex gap-5 justify-between">
      <motion.a
        href="https://www.linkedin.com/in/lucas-cunegundes/"
        target="_blank"
        className="outline outline-1 outline-gray-400/50 shadow-lg p-1 rounded-full border-gray-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BiLogoLinkedin
          className="text-gray-950 dark:text-gray-50 hover:text-blue-800 dark:hover:text-blue-800"
          size={38}
        />
      </motion.a>
      <motion.a
        href="https://www.github.com/Cunegundess/"
        target="_blank"
        className="outline outline-1 outline-gray-400/50 shadow-lg p-1 rounded-full border-gray-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BiLogoGithub
          className="text-gray-950 dark:text-gray-50 hover:text-gray-500 dark:hover:text-gray-400"
          size={38}
        />
      </motion.a>
      <motion.a
        href="mailto:lucascsantana6@gmail.com"
        target="_blank"
        className="outline outline-1 outline-gray-400/50 shadow-lg p-1 rounded-full border-gray-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BiLogoGmail
          className="text-gray-950 dark:text-gray-50 hover:text-red-800 dark:hover:text-red-800"
          size={38}
        />
      </motion.a>
    </div>
  );
}

export default IconsContact;
