import React from "react";
import "./PortfolioItem.css";
import { Link } from "react-router-dom";

const PortfolioItem = props => {
  const { project } = props;
  return (
    <div className="portfolio-item-container">
      <div
        className={`portfolio-item-icon-container portfolio-item-icon-container--${
          project.colorScheme
        }`}
      >
        <i className={`${project.fontAwesomeIcon} portfolio-item-icon`} />
      </div>

      <h1 className="portfolio-item-title">{project.name}</h1>
      <p className="portfolio-item-description">{project.description}</p>
      <p className="portfolio-item-see-more-container">
        <Link
          className="portfolio-item-see-more-link"
          to={`/project/${project.detailsLink}`}
          state={project}
        >
          Details
        </Link>
        {" | "}
        <a
          className="portfolio-item-see-more-link"
          rel="noopener noreferrer"
          target="_blank"
          href={project.githubLink}
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default PortfolioItem;
