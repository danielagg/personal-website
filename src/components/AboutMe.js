import React from "react";
import "./AboutMe.css";
import * as Scroll from "react-scroll";

function AboutMe() {
  return (
    <div>
      <Scroll.Element name="about-me-anchor" className="element">
        <h1>about me</h1>
      </Scroll.Element>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione
        at accusantium esse, sint commodi dolorum asperiores repellendus tempora
        quasi voluptatum totam repudiandae quas laboriosam possimus qui ea
        consequuntur odit nostrum eveniet eaque? Ullam, quibusdam veniam
        repellat temporibus totam dolorem.
      </p>
      <a className="resume-link" href="">
        resumé (pdf)
      </a>
    </div>
  );
}

export default AboutMe;
