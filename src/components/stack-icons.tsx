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

const stackItems = [
  {
    name: "React",
    href: "https://react.dev/",
    icon: BiLogoReact,
  },
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: BiLogoJavascript,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: BiLogoTypescript,
  },
  {
    name: "Django",
    href: "https://www.djangoproject.com/",
    icon: BiLogoDjango,
  },
  {
    name: "Python",
    href: "https://www.python.org/",
    icon: BiLogoPython,
  },
  {
    name: "Java",
    href: "https://docs.oracle.com/en/java/",
    icon: BiLogoJava,
  },
  {
    name: "Spring Boot",
    href: "https://docs.spring.io/spring-framework/reference/index.html",
    icon: BiLogoSpringBoot,
  },
  {
    name: "RabbitMQ",
    href: "https://www.rabbitmq.com/",
    icon: SiRabbitmq,
  },
  {
    name: "Celery",
    href: "https://docs.celeryq.dev/en/stable/",
    icon: SiCelery,
  },
  {
    name: "SQL Server",
    href: "https://www.microsoft.com/en-us/sql-server/",
    icon: SiMicrosoftsqlserver,
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: BiLogoPostgresql,
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
    icon: BiLogoDocker,
  },
  {
    name: "Bash",
    href: "https://www.gnu.org/software/bash/manual/bash.html",
    icon: SiGnubash,
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com/",
    icon: BiLogoTailwindCss,
  },
  {
    name: "Bootstrap",
    href: "https://getbootstrap.com/",
    icon: BiLogoBootstrap,
  },
];

function StackIcons() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex items-center gap-6 md:gap-8 lg:gap-10 py-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...stackItems, ...stackItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={`${item.name}-${index}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center"
            >
              <Icon
                className={
                  item.name === "React"
                    ? "text-sky-400"
                    : item.name === "JavaScript"
                    ? "text-yellow-400"
                    : item.name === "TypeScript"
                    ? "text-blue-500"
                    : item.name === "Django"
                    ? "text-emerald-500"
                    : item.name === "Python"
                    ? "text-blue-400"
                    : item.name === "Java"
                    ? "text-orange-500"
                    : item.name === "Spring Boot"
                    ? "text-green-500"
                    : item.name === "RabbitMQ"
                    ? "text-orange-400"
                    : item.name === "Celery"
                    ? "text-lime-400"
                    : item.name === "SQL Server"
                    ? "text-red-500"
                    : item.name === "PostgreSQL"
                    ? "text-sky-500"
                    : item.name === "Docker"
                    ? "text-sky-400"
                    : item.name === "Bash"
                    ? "text-slate-500 dark:text-slate-300"
                    : item.name === "Tailwind"
                    ? "text-sky-400"
                    : item.name === "Bootstrap"
                    ? "text-purple-500"
                    : "text-accent"
                }
                size={64}
              />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}

export default StackIcons;
