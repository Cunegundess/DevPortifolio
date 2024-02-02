import LanguageToggle from "@/components/LanguageToggle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { LuMoreVertical } from "react-icons/lu";
import ThemeToggle from "../../components/ThemeToggle";

function NavbarContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [t] = useTranslation("translation");

  const links = [
    { name: t("Navbar.Home"), link: "/" },
    { name: t("Navbar.AboutMe"), link: "/" },
    { name: t("Navbar.Skills"), link: "/" },
    { name: t("Navbar.Work"), link: "/" },
    { name: t("Navbar.Projects"), link: "/" },
    { name: t("Navbar.Contact"), link: "/" },
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
    <div className="flex flex-row gap-8 font-medium items-center relative ">
      {isMenuOpen ? (
        <ul className="lg:hidden absolute top-10 right-0 bg-zinc-50 dark:bg-zinc-900 py-2 px-5 shadow-lg rounded-md">
          {links.map((link) => (
            <li
              key={link.name}
              className="mb-2  hover:text-zinc-500 dark:hover:text-zinc-400"
            >
              <a href={`#${link.name}`}>{link.name} </a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="hidden lg:flex lg:flex-row lg:gap-10 lg:font-medium lg:items-center md:hidden sm:hidden">
          {links.map((link) => (
            <li
              key={link.name}
              className="hover:text-zinc-500 dark:hover:text-zinc-400"
            >
              <a href={`#${link.name}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
      <ThemeToggle />
      <LanguageToggle />
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-zinc-950 dark:text-zinc-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {!isMenuOpen ? <LuMoreVertical size={28} /> : <IoClose size={28} />}
      </motion.button>
    </div>
  );
}

export default NavbarContent;
