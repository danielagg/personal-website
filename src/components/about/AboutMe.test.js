import React from "react";
import { shallow } from "enzyme";
import AboutMe from "./AboutMe";
import { findByTestAttribute } from "./../../../utilities";

const setUp = (props = {}) => {
  const component = shallow(<AboutMe {...props} />);
  return component;
};

describe("About Me Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttribute(component, "about-me-container");
    expect(wrapper.length).toBe(1);
  });
});
