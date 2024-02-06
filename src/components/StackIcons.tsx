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
    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-6 lg:px-6 py-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://react.dev/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md "
      >
        <BiLogoReact className="text-white" size={"70%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 shadow-md "
      >
        <BiLogoJavascript className="text-white" size={"70%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.typescriptlang.org/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 shadow-md "
      >
        <BiLogoTypescript className="text-white" size={"70%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.python.org/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-800 to-blue-900 shadow-md "
      >
        <BiLogoPython className="text-white" size={"70%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.djangoproject.com/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-700 shadow-md "
      >
        <BiLogoDjango className="text-white" size={"70%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.microsoft.com/en-us/sql-server/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-700 shadow-md "
      >
        <SiMicrosoftsqlserver className="text-white" size={"70%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.postgresql.org/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 shadow-md "
      >
        <BiLogoPostgresql className="text-white" size={"70%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.docker.com/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 shadow-md "
      >
        <BiLogoDocker className="text-white" size={"70%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://tailwindcss.com/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 shadow-md "
      >
        <BiLogoTailwindCss className="text-white" size={"70%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://getbootstrap.com/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 shadow-md "
      >
        <BiLogoBootstrap className="text-white" size={"70%"} />
      </motion.a>
    </div>
  );
}

export default StackIcons;
