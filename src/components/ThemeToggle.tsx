import { motion } from "framer-motion";
import { TbHazeMoon, TbSunset2 } from "react-icons/tb";
import useThemeToggle from "../hooks/useThemeToggle";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? <TbHazeMoon size={30} /> : <TbSunset2 size={30} />}
    </motion.button>
  );
}

export default ThemeToggle;
