import React from "react";
import "./AboutMe.css";
import * as Scroll from "react-scroll";

const AboutMe = () => {
  return (
    <div className="about-me-container" data-test="about-me-container">
      <Scroll.Element name="about-me-anchor" className="element">
        <h1>about me</h1>
      </Scroll.Element>
      <p>
        I'm a software developer from Hungary with more than three years of
        professional experience. I've primarly worked on enterprise
        applications’ backends, as well as various front ends, while working on
        modern web applications as hobby projects, such as this site.
      </p>
      <a className="resume-link" href="#">
        resumé (pdf)
      </a>
    </div>
  );
};

export default AboutMe;
