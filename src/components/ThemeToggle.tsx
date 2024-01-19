import { motion } from "framer-motion";
import IconMoon from "../assets/moon";
import IconSun from "../assets/sun";
import useThemeToggle from "../hooks/useThemeToggle";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? (
        <IconMoon height={"30px"} width={"30px"} />
      ) : (
        <IconSun height={"30px"} width={"30px"} />
      )}
    </motion.button>
  );
}

export default ThemeToggle;
