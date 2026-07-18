import React from "react";

export default function Introduction() {
  return (
    <section className="hero-container">
      <div className="hero-avatar-container">
        <img
          src="https://avatars.githubusercontent.com/u/45330487?v=4"
          alt="Bivas Kumar"
          className="hero-avatar"
        />
      </div>
      <div className="hero-details">
        <h1 className="hero-title">Bivas Kumar</h1>
        <p className="hero-role code-font">Software Developer @ CISOGenie™</p>
        <p className="hero-subtitle">
          👋🏼 Hey there! I'm a developer building secure Pythonic applications
          and SaaS APIs. Currently focused on building closed-source SaaS tools
          for security professionals at{" "}
          <a
            href="https://www.cisogenie.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CISOGenie™
          </a>
          .
        </p>
      </div>
    </section>
  );
}
