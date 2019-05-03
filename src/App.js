import React from "react";
import "normalize.css";
import AboutMe from "./components/AboutMe";
import LandingWrapper from "./components/LandingWrapper";
import ThemeSelector from "./components/shared/ThemeSelector";

function App() {
  return (
    <div className="App">
      <ThemeSelector />
      <LandingWrapper />
      <AboutMe />
    </div>
  );
}

export default App;
