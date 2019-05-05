import React, { Component } from "react";

const Context = React.createContext();

export const Consumer = Context.Consumer;

const reducer = (state, action) => state;

export class Provider extends Component {
  state = {
    projects: [
      {
        id: 1,
        detailsLink: "course-management-crud-app",
        name: "Course Management CRUD app",
        description:
          "ASP.NET Core backend (EF Core, localDb), React frontend. A practice project for a full stack solution for general course management. Used GraphQL, Apollo.",
        githubLink: "https://github.com/danielagg/course-management-crud",
        fontAwesomeIcon: "fas fa-university",
        colorScheme: "blue"
      },
      {
        id: 2,
        detailsLink: "personal-site",
        name: "Personal site",
        description:
          "This exact website - my personal, serverless portfolio, built with React, deployed to Zeit after each git push.",
        githubLink: "https://github.com/danielagg/personal-website",
        fontAwesomeIcon: "fas fa-portrait",
        colorScheme: "red"
      },
      {
        id: 3,
        detailsLink: "sertave-amps-app",
        name: "Sertave Amplification app",
        description:
          "A website for a made-up guitar amplification manufacturer. Similar technologies as on the Course Management CRUD app.",
        githubLink: "#",
        fontAwesomeIcon: "fas fa-compact-disc",
        colorScheme: "green"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
