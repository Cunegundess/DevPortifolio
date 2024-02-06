import { motion } from "framer-motion";
import { RiMoonClearLine } from "react-icons/ri";
import { TbSunset2 } from "react-icons/tb";
import useThemeToggle from "../hooks/useThemeToggle";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? <RiMoonClearLine size={28} /> : <TbSunset2 size={30} />}
    </motion.button>
  );
}

export default ThemeToggle;
