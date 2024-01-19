import { motion } from "framer-motion";
import IconGithub from "../assets/github";
import IconGmail from "../assets/gmail";
import IconLinkedin from "../assets/linkedin";

function IconsContact() {
  return (
    <div className="flex gap-4 justify-between">
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <IconLinkedin
          className="text-zinc-950 dark:text-zinc-50 hover:text-zinc-500 dark:hover:text-zinc-400"
          width={"30px"}
          height={"30px"}
        />
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <IconGithub
          className="text-zinc-950 dark:text-zinc-50 hover:text-zinc-500 dark:hover:text-zinc-400"
          width={"30px"}
          height={"30px"}
        />
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <IconGmail
          className="text-zinc-950 dark:text-zinc-50 hover:text-zinc-500 dark:hover:text-zinc-400"
          width={"30px"}
          height={"30px"}
        />
      </motion.button>
    </div>
  );
}

export default IconsContact;
