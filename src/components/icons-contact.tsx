import { motion } from "framer-motion";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function IconsContact() {
  return (
    <div className="flex gap-4 justify-center">
      <motion.a
        href="https://www.linkedin.com/in/lucas-cunegundes/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center p-3 shadow-md border border-accent/30 dark:bg-accent/10 rounded-lg h-fit w-fit bg-accent/5 hover:bg-accent hover:text-accent-foreground text-accent transition-all duration-300"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <BiLogoLinkedin size={24} />
      </motion.a>

      <motion.a
        href="https://www.github.com/Cunegundess/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center p-3 shadow-md border border-primary/30 dark:bg-primary/10 rounded-lg h-fit w-fit bg-primary/5 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGithubAlt size={24} />
      </motion.a>
      <motion.a
        href="mailto:lucascsantana6@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center p-3 shadow-md border border-accent/30 dark:bg-accent/10 rounded-lg h-fit w-fit bg-accent/5 hover:bg-accent hover:text-accent-foreground text-accent transition-all duration-300"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <HiOutlineMail size={24} />
      </motion.a>
    </div>
  );
}

export default IconsContact;
