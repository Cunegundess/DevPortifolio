import { motion } from "framer-motion";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function IconsContact() {
  return (
    <div className="flex gap-5 justify-between">
      <motion.a
        href="https://www.linkedin.com/in/lucas-cunegundes/"
        target="_blank"
        className="flex gap-1 shadow-lg p-1 border-solid border-2 border-zinc-300 dark:border-transparent rounded-md h-fit w-fit bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BiLogoLinkedin className="text-zinc-950 dark:text-zinc-50" size={26} />
      </motion.a>

      <motion.a
        href="https://www.github.com/Cunegundess/"
        target="_blank"
        className="flex gap-1 shadow-lg p-1 border-solid border-2 border-zinc-300 dark:border-transparent rounded-md h-fit w-fit bg-gradient-to-r hover:from-cyan-500 hover:to-blue-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGithubAlt className="text-zinc-950 dark:text-zinc-50" size={26} />
      </motion.a>
      <motion.a
        href="mailto:lucascsantana6@gmail.com"
        target="_blank"
        className="flex gap-1 shadow-lg p-1 border-solid border-2 border-zinc-300 dark:border-transparent rounded-md h-fit w-fit bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <HiOutlineMail className="text-zinc-950 dark:text-zinc-50" size={26} />
      </motion.a>
    </div>
  );
}

export default IconsContact;
