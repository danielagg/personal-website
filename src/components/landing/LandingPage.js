import React from "react";
import AboutMe from "../AboutMe";
import Header from "../shared/Header";
import LandingBody from "./LandingBody";
import Contact from "./Contact";
import ThemeSelector from "../shared/ThemeSelector";
import BackToTopNavigation from "../shared/BackToTopNavigation";
import Footer from "../shared/Footer";
import PortfolioWrapper from "../portfolio/PortfolioWrapper";

const LandingPage = () => {
  return (
    <div>
      <ThemeSelector />
      <Header />
      <LandingBody />
      <Contact />
      <BackToTopNavigation />
      <PortfolioWrapper />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default LandingPage;
