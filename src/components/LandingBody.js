import React from "react";
import "./LandingBody.css";

const LandingBody = () => {
  return (
    <>
      <p className="landing-description">
        I am full stack software developer with more than three years of
        professional experience, during which I've primarly worked on enterprise
        applications’ backends, as well as various front ends.
      </p>

      <nav className="main-navigation">
        <ul className="main-navigation-list">
          <li className="main-navigation-list-item">
            <a href="#">about me</a>
          </li>
          <li className="main-navigation-list-item">
            {" "}
            <a href="#">view projects</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LandingBody;
