import LanguageToggle from "@/components/language-toggle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import ThemeToggle from "../../components/theme-toggle";

function NavbarContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [t] = useTranslation("translation");

  const links = [
    { name: t("Navbar.AboutMe"), link: `/#${t("Navbar.AboutMe")}` },
    { name: t("Navbar.Skills"), link: `/#${t("Navbar.Skills")}` },
    { name: t("Navbar.Projects"), link: `/#${t("Navbar.Projects")}` },
    { name: t("Navbar.Work"), link: `/#${t("Navbar.Work")}` },
    { name: t("Navbar.Contact"), link: `/#${t("Navbar.Contact")}` },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      setIsMenuOpen(false);
    }
  }, [isLargeScreen]);

  return (
    <div className="flex flex-row gap-8 font-medium items-center relative tracking-wide">
      {isMenuOpen ? (
        <ul className="lg:hidden flex flex-col absolute top-10 right-0 bg-slate-50 dark:bg-slate-900 p-5 w-[150px] shadow-lg rounded-md text-center gap-3">
          {links.map((link) => (
            <li
              key={link.name}
              className="hover:text-slate-500 dark:hover:text-slate-400"
            >
              <a href={link.link}>{link.name} </a>
            </li>
          ))}
          <LanguageToggle />
        </ul>
      ) : (
        <ul className="hidden lg:flex lg:flex-row lg:gap-10 lg:font-medium lg:items-center md:hidden sm:hidden">
          {links.map((link) => (
            <li
              key={link.name}
              className="hover:text-slate-500 dark:hover:text-slate-400"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
          <LanguageToggle />
        </ul>
      )}
      <ThemeToggle />
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-slate-950 dark:text-slate-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {!isMenuOpen ? <TbMenu2 size={28} /> : <IoClose size={28} />}
      </motion.button>
    </div>
  );
}

export default NavbarContent;
