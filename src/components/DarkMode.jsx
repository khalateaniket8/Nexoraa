import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleDark = () => {
    const newTheme = !dark;

    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleDark}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:scale-105 transition-all duration-300"
    >
      {dark ? (
        <>
          <FaSun className="text-yellow-400" />
          <span>Light</span>
        </>
      ) : (
        <>
          <FaMoon className="text-blue-600" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
};

export default DarkMode;