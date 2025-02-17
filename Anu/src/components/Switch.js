import React from "react";
import "./Switch.css";
import { useTheme } from "./ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"} // Checkbox is checked when in dark mode
        onChange={toggleTheme}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
