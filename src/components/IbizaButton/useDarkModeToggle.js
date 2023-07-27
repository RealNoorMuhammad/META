// useDarkModeToggle.js
import { useState, useEffect } from "react";

const useDarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const localDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (localDarkMode !== null) {
      setDarkMode(localDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkModeToggle;
