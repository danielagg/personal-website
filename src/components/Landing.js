import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <header>
        <h1 className="landing-name">Daniel Agg</h1>
        <h2 className="landing-title">Fullstack software developer</h2>

        <p className="landing-description">
          I am full stack software developer with more than three years of
          professional experience, during which I worked primarly on enterprise
          applications’ backends, as well as various front ends.
        </p>
      </header>

      <nav>
        <ul>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            {" "}
            <a href="#">View Projects</a>
          </li>
        </ul>
      </nav>

      <section>
        <h2>Contact</h2>
        <ul>
          <li>daniel.agg@outlook.com</li>
          <li>+36 20 612 1279</li>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </section>
    </>
  );
};

export default Landing;
