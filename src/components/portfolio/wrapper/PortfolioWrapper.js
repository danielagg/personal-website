import React from "react";
import * as Scroll from "react-scroll";
import "./PortfolioWrapper.css";
import PortfolioItem from "../quick-details/PortfolioItem";
import { Consumer } from "../../../context";

const PortfolioWrapper = () => {
  return (
    <Consumer>
      {value => {
        const { projects } = value;

        return (
          <div className="portfolio-container">
            <Scroll.Element name="my-projects-anchor" className="element">
              <h1 className="projects-title">projects</h1>
            </Scroll.Element>
            <div className="portfolio-items-wrapper">
              {projects.map(project => (
                <PortfolioItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default PortfolioWrapper;
