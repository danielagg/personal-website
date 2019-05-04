import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <h2>say hello @</h2>
      <ul className="contact-list">
        <li className="contact-list-item">
          You can reach me at{" "}
          <span style={{ fontWeight: "bold" }}>daniel.agg@outlook.com</span> or
          call me directly at{" "}
          <span style={{ fontWeight: "bold" }}>+36 20 612 1279</span>
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
