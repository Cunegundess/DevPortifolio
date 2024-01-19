import { useEffect, useState } from "react";

function useThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  return { isDarkMode, toggleTheme };
}

export default useThemeToggle;
