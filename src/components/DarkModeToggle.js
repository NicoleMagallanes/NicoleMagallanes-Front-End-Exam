import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={darkMode}
        onChange={handleDarkModeToggle}
        className="hidden"
      />
      <label
        htmlFor="darkModeToggle"
        className={`cursor-pointer relative w-14 h-8  rounded-full ${
          darkMode ? "bg-gray-600" : "bg-gray-300"
        } transition-colors duration-300 ease-in-out`}
      >
        <span
          className={`dot absolute left-1 top-1 w-6 h-6 rounded-full ${
            darkMode ? "bg-gray-400" : "bg-white"
          } transition-transform duration-300 ease-in-out transform ${
            darkMode ? "translate-x-full" : ""
          }`}
        ></span>
      </label>
      <span className="ml-2 font-medium text-gray-700 dark:text-gray-300">
        Dark Mode
      </span>
    </div>
  );
};

export default DarkModeToggle;
