import { useEffect, useState } from "react";

function useThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    localStorage.setItem("theme", "light");
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return { isDarkMode, toggleTheme };
}

export default useThemeToggle;
