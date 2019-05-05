import React from "react";
import "./LandingBody.css";
import * as Scroll from "react-scroll";

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
            <Scroll.Link
              activeClass="active"
              to="my-projects-anchor"
              smooth={true}
              offset={-40}
              duration={450}
              className="main-navigation-list-item-link"
            >
              view portfolio
            </Scroll.Link>
          </li>
          <li className="main-navigation-list-item">
            <Scroll.Link
              activeClass="active"
              to="about-me-anchor"
              smooth={true}
              offset={-40}
              duration={450}
              className="main-navigation-list-item-link"
            >
              about me
            </Scroll.Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LandingBody;
