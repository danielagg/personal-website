import React from "react";
import "normalize.css";
import { CookiesProvider } from "react-cookie";
import AboutMe from "./components/AboutMe";
import LandingWrapper from "./components/LandingWrapper";
import ThemeSelector from "./components/shared/ThemeSelector";
import Footer from "./components/shared/Footer";
import PortfolioWrapper from "./components/portfolio/PortfolioWrapper";

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <ThemeSelector />
        <LandingWrapper />
        <AboutMe />
        <PortfolioWrapper />
        <Footer />
      </div>
    </CookiesProvider>
  );
}

export default App;
