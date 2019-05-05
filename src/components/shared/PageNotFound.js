import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Sorry, this page does not exist.</h1>
      <p>todo: style this component.</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default PageNotFound;
