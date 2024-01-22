import { motion } from "framer-motion";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

function IconsContact() {
  return (
    <div className="flex gap-5 justify-between">
      <motion.button
        className="outline outline-1 outline-zinc-400/50 shadow-lg p-1 rounded-full border-zinc-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BiLogoLinkedin
          className="text-zinc-950 dark:text-zinc-50 hover:text-zinc-500 dark:hover:text-zinc-400"
          size={30}
        />
      </motion.button>
      <motion.button
        className="outline outline-1 outline-zinc-400/50 shadow-lg p-1 rounded-full border-zinc-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BiLogoGithub
          className="text-zinc-950 dark:text-zinc-50 hover:text-zinc-500 dark:hover:text-zinc-400"
          size={30}
        />
      </motion.button>
      <motion.button
        className="outline outline-1 outline-zinc-400/50 shadow-lg p-1 rounded-full border-zinc-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BiLogoGmail
          className="text-zinc-950 dark:text-zinc-50 hover:text-zinc-500 dark:hover:text-zinc-400"
          size={30}
        />
      </motion.button>
    </div>
  );
}

export default IconsContact;
