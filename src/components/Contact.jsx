import React from "react";

export default function Contact() {
  return (
    <section className="contact-container">
      <h2 className="section-title">Get in Touch</h2>
      <p>Feel free to reach out via email or find me on these networks:</p>

      <div className="contact-links">
        <a href="mailto:thetrotfreak@yahoo.com" className="contact-link">
          Email
        </a>
        <a
          href="https://github.com/thetrotfreak"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/bivaskumar/?skipRedirect=true"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/thetrotfreak"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          X (Twitter)
        </a>
      </div>
    </section>
  );
}
