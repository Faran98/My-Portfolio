import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className=" w-auto h-auto p-2 dark:px-2.5 border-2 dark:text-custom-green dark:border-custom-green  mt-4 rounded-full flex items-center justify-center"
    >
      <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} />
    </button>
  );
};

export default DarkModeToggle;
