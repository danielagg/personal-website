import React from "react";
import Footer from "../shared/Footer";
import ThemeSelector from "../shared/ThemeSelector";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import "./ProjectDetails.css";

const ProjectDetails = props => {
  return (
    <Consumer>
      {value => {
        const project = value.projects.find(
          project => project.detailsLink === props.match.params.id
        );

        return (
          <>
            <div className="project-details-top-utilities">
              <Link className="project-details-go-back" to="/">
                &larr; Go back
              </Link>
              <ThemeSelector />
            </div>

            <div
              className={`project-details-top-bar project-details-top-bar--${
                project.colorScheme
              }`}
            >
              <i
                className={`${project.fontAwesomeIcon} portfolio-details-icon`}
              />
              <h1>{project.name}</h1>
            </div>

            <h2>{project.description}</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              voluptatem dicta ullam, consequuntur expedita non. Quia asperiores
              modi fuga omnis odio nam ullam nostrum iure a. Accusamus dolorem
              eveniet consequatur quos ab eos tempore eius hic a. Cupiditate,
              numquam natus?
            </p>

            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus quas cumque fugit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus quas cumque fugit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus quas cumque fugit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus quas cumque fugit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus quas cumque fugit.
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut vero
              dicta a eos nostrum omnis quo beatae deleniti? Officiis
              voluptatibus sint numquam ipsum! Neque beatae totam praesentium,
              quas odio ab vel culpa temporibus ipsum exercitationem
              consequuntur quisquam eligendi natus nisi facere molestias harum
              suscipit quibusdam commodi minus illo porro vero. Corporis
              doloremque labore consectetur et, distinctio nisi alias, obcaecati
              error autem laborum quibusdam voluptates porro fugiat non libero
              nesciunt similique saepe blanditiis? Porro nihil incidunt quaerat
              rem dolores quia eius commodi illo tenetur beatae voluptatibus
              harum quae alias quos tempora qui vero aut explicabo quis
              cupiditate officiis, praesentium cumque? Adipisci, repellendus.
              Ullam magnam omnis repudiandae blanditiis perspiciatis doloribus
              debitis, optio inventore itaque excepturi expedita quo atque,
              architecto, deserunt nobis magni?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              ipsam id minus recusandae suscipit necessitatibus quia, animi
              quidem magni maiores earum quibusdam molestiae modi odio assumenda
              repudiandae numquam consectetur ut repellendus, omnis impedit,
              nesciunt rerum ex laudantium. Libero repellendus, fuga adipisci
              odio labore, dolorem optio ea rerum repudiandae, nam accusantium?
            </p>

            <Footer />
          </>
        );
      }}
    </Consumer>
  );
};

export default ProjectDetails;
