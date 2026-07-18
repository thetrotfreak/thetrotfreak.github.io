import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ theme, toggleTheme }) {
  return (
    <header>
      <div className="nav-container">
        <span
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          BK
        </span>
        <div className="nav-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
