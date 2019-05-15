import React from "react";
import { shallow } from "enzyme";
import PortfolioItem from "./PortfolioItem";
import { findByTestAttribute, checkProps } from "./../../../../utilities";

const setUp = (props = {}) => {
  const component = shallow(<PortfolioItem {...props} />);
  return component;
};

describe("Portfolio Item Component", () => {
  describe("Checking prop types", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        project: {
          id: 1,
          detailsLink: "test details link",
          name: "test name",
          description: "test description",
          githubLink: "test github link",
          fontAwesomeIcon: "test font awesome icon",
          colorScheme: "test color scheme"
        }
      };

      const propErrors = checkProps(PortfolioItem, expectedProps);
      expect(propErrors).toBeUndefined();
    });
  });
});
