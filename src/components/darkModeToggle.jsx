import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light");

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
      className="bg-purple-400 w-auto h-auto p-2 mt-4 rounded-full"
    >
      {theme === "dark" ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
