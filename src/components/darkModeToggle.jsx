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
      className=" w-auto h-auto p-2 text-xs md:p-2 md:dark:p-2 md:px-2.5 border-2 dark:text-custom-green hover:bg-custom-green dark:hover:text-white dark:border-custom-green  rounded-full flex items-center justify-center"
    >
      <FontAwesomeIcon icon={theme === "dark" ? faSun :  faMoon} />
    </button>
  );
};

export default DarkModeToggle;
