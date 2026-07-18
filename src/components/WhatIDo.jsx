import React from "react";

export default function WhatIDo() {
  return (
    <section>
      <h2 className="section-title">What I Do</h2>

      <div className="card-grid">
        <div className="card card-security">
          <h3 className="card-title">Web Security SaaS</h3>
          <p className="card-description">
            Building high-performance backend APIs, robust data validation, and
            secure database systems.
          </p>
        </div>

        <div className="card card-gui">
          <h3 className="card-title">Pythonic GUIs & Tools</h3>
          <p className="card-description">
            Crafting responsive desktop user interfaces and helper tools using
            Python.
          </p>
        </div>
      </div>
    </section>
  );
}
