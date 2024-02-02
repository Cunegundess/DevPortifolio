import { motion } from "framer-motion";
import {
  BiLogoBootstrap,
  BiLogoDjango,
  BiLogoDocker,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiMicrosoftsqlserver } from "react-icons/si";

function StackIcons() {
  return (
    <div className="grid grid-rows-5 md:grid-rows-3 lg:grid-rows-2 grid-flow-col gap-10">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://react.dev/"
        target="_blank"
        className="shadow-lg rounded-md bg-zinc-50 dark:bg-zinc-900 p-1"
      >
        <BiLogoReact className="text-cyan-400 " size={64} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        className="shadow-lg rounded-md bg-zinc-50 dark:bg-zinc-900 p-1"
      >
        <BiLogoJavascript className="text-amber-400 " size={64} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.typescriptlang.org/"
        target="_blank"
        className="shadow-lg rounded-md bg-zinc-50 dark:bg-zinc-900 p-1"
      >
        <BiLogoTypescript className="text-blue-600 " size={64} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.python.org/"
        target="_blank"
        className="shadow-lg rounded-md bg-zinc-50 dark:bg-zinc-900 p-1"
      >
        <BiLogoPython className="text-blue-900 " size={64} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.djangoproject.com/"
        target="_blank"
        className="shadow-lg rounded-md bg-zinc-50 dark:bg-zinc-900 p-1"
      >
        <BiLogoDjango className="text-green-700 " size={64} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.microsoft.com/en-us/sql-server/"
        target="_blank"
        className="shadow-lg rounded-md bg-zinc-50 dark:bg-zinc-900 p-1"
      >
        <SiMicrosoftsqlserver className="text-red-700 " size={64} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.postgresql.org/"
        target="_blank"
        className="shadow-lg rounded-md bg-zinc-50 dark:bg-zinc-900 p-1"
      >
        <BiLogoPostgresql className="text-blue-700 " size={64} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.docker.com/"
        target="_blank"
        className="shadow-lg rounded-md bg-zinc-50 dark:bg-zinc-900 p-1"
      >
        <BiLogoDocker className="text-blue-500 " size={64} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://tailwindcss.com/"
        target="_blank"
        className="shadow-lg rounded-md bg-zinc-50 dark:bg-zinc-900 p-1"
      >
        <BiLogoTailwindCss className="text-cyan-700 " size={64} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://getbootstrap.com/"
        target="_blank"
        className="shadow-lg rounded-md bg-zinc-50 dark:bg-zinc-900 p-1"
      >
        <BiLogoBootstrap className="text-purple-700 " size={64} />
      </motion.a>
    </div>
  );
}

export default StackIcons;
