import React, { useState } from "react";
import "./ThemeSelector.css";

const ThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const onChangeTheme = () => {
    if (currentTheme === "light") {
      addTransition();
      document.documentElement.setAttribute("data-theme", "dark");
      setCurrentTheme("dark");
    } else {
      addTransition();
      document.documentElement.setAttribute("data-theme", "light");
      setCurrentTheme("light");
    }
  };

  const addTransition = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(
      () => document.documentElement.classList.remove("transition"),
      100
    );
  };

  return (
    <div>
      <button className="theme-selector-control" onClick={onChangeTheme}>
        change theme to {currentTheme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default ThemeSelector;
