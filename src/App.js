import React from "react";
import "normalize.css";
import { CookiesProvider } from "react-cookie";
import LandingPage from "./components/landing/LandingPage";
import ProjectDetails from "./components/portfolio/ProjectDetails";
import PageNotFound from "./components/shared/PageNotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as ContextProvider } from "./context";

function App() {
  return (
    <ContextProvider>
      <CookiesProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/project/:id" component={ProjectDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
        <div className="App" />
      </CookiesProvider>
    </ContextProvider>
  );
}

export default App;
