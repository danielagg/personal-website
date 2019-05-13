import React from "react";
import AboutMe from "../../about/AboutMe";
import Header from "../header/Header";
import LandingBody from "../main-content/LandingBody";
import Contact from "../contact/Contact";
import ThemeSelector from "../../shared/theme-selector/ThemeSelector";
import BackToTopNavigation from "../../shared/back-to-top/BackToTopNavigation";
import Footer from "../../shared/footer/Footer";
import PortfolioWrapper from "../../portfolio/wrapper/PortfolioWrapper";

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
