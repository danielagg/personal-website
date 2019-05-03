import React from "react";
import "./Landing.css";
import Header from "./shared/Header";
import LandingBody from "./LandingBody";

const Landing = () => {
  return (
    <>
      <Header />
      <LandingBody />

      <section>
        <h2>say hello @</h2>
        <ul className="contact-list">
          <li className="contact-list-item">daniel.agg@outlook.com</li>
          <li className="contact-list-item">+36 20 612 1279</li>
          <li className="contact-list-item">
            <a
              href="https://www.linkedin.com/in/danielagg/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="contact-list-item">
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
    </>
  );
};

export default Landing;
