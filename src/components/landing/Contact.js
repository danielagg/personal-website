import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <ul className="contact-list">
        <li className="contact-list-item">
          You can reach me at{" "}
          <span style={{ fontWeight: "bold" }}>daniel.agg@outlook.com</span> or
          via:
        </li>
        <li className="contact-list-item">
          <a
            href="https://www.linkedin.com/in/danielagg/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          {" | "}
          <a
            href="https://github.com/danielagg/"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
