import { motion } from "framer-motion";
import {
  BiLogoBootstrap,
  BiLogoDjango,
  BiLogoDocker,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiCelery, SiGnubash, SiMicrosoftsqlserver, SiRabbitmq } from "react-icons/si";

function StackIcons() {
  return (
    <div className="grid grid-cols-4 max-[450px]:grid-cols-3 min-[600px]:grid-cols-6 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-7 lg:px-16 py-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://react.dev/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md"
      >
        <BiLogoReact className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-yellow-600 shadow-md "
      >
        <BiLogoJavascript className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.typescriptlang.org/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 shadow-md "
      >
        <BiLogoTypescript className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.djangoproject.com/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-900 shadow-md "
      >
        <BiLogoDjango className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.python.org/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-900 shadow-md "
      >
        <BiLogoPython className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://docs.oracle.com/en/java/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-600 to-orange-900 shadow-md "
      >
        <BiLogoJava className="text-white" size={"60%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://docs.spring.io/spring-framework/reference/index.html"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-900 shadow-md "
      >
        <BiLogoSpringBoot className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.rabbitmq.com/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 shadow-md "
      >
        <SiRabbitmq className="text-white" size={"40%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://docs.celeryq.dev/en/stable/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-800 shadow-md "
      >
        <SiCelery className="text-white" size={"45%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.microsoft.com/en-us/sql-server/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-800 shadow-md "
      >
        <SiMicrosoftsqlserver className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.postgresql.org/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-900 shadow-md "
      >
        <BiLogoPostgresql className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.docker.com/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 shadow-md "
      >
        <BiLogoDocker className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://www.gnu.org/software/bash/manual/bash.html"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-gray-400 to-gray-700 shadow-md "
      >
        <SiGnubash className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://tailwindcss.com/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-400 to-sky-700 shadow-md "
      >
        <BiLogoTailwindCss className="text-white" size={"50%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://getbootstrap.com/"
        target="_blank"
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-900 shadow-md "
      >
        <BiLogoBootstrap className="text-white" size={"50%"} />
      </motion.a>
    </div>
  );
}

export default StackIcons;
