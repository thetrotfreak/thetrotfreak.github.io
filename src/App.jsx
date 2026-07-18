import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import WhatIDo from "./components/WhatIDo";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Introduction />
        <WhatIDo />
        <Contact />
      </main>
      <footer>
        <div className="code-font">
          &copy; {new Date().getFullYear()} Bivas Kumar.
        </div>
      </footer>
    </>
  );
}

export default App;
