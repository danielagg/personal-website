import React, { useState } from "react";
import * as Scroll from "react-scroll";
import "./PortfolioWrapper.css";
import PortfolioItem from "./PortfolioItem";

const PortfolioWrapper = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Course Management CRUD app",
      description:
        "ASP.NET Core backend (EF Core, localDb), React frontend. A practice project for a full stack solution for general course management. Used GraphQL, Apollo.",
      githubLink: "https://github.com/danielagg/course-management-crud",
      fontAwesomeIcon: "fas fa-university",
      colorScheme: "blue"
    },
    {
      id: 2,
      name: "Personal site",
      description:
        "This exact website - my personal, serverless portfolio, built with React, deployed to Zeit after each git push.",
      githubLink: "https://github.com/danielagg/personal-website",
      fontAwesomeIcon: "fas fa-portrait",
      colorScheme: "red"
    },
    {
      id: 3,
      name: "Sertave Amplification app",
      description:
        "A website for a made-up guitar amplification manufacturer. Similar technologies as on the Course Management CRUD app.",
      githubLink: "#",
      fontAwesomeIcon: "fas fa-compact-disc",
      colorScheme: "green"
    }
  ]);

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
};

export default PortfolioWrapper;
