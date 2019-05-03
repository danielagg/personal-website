import React from "react";
import "./LandingWrapper.css";
import Header from "./shared/Header";
import LandingBody from "./LandingBody";
import Contact from "./Contact";

const LandingWrapper = () => {
  return (
    <>
      <Header />
      <LandingBody />
      <Contact />
    </>
  );
};

export default LandingWrapper;
