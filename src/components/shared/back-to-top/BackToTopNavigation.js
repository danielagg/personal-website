import React from "react";
import "./BackToTopNavigation.css";
import * as Scroll from "react-scroll";

const BackToTopNavigation = () => {
  const scrollToTop = () =>
    Scroll.animateScroll.scrollToTop({
      duration: 500,
      smooth: true
    });

  return (
    <div className="back-to-top-container">
      <p onClick={scrollToTop}>back to top &uarr;</p>
    </div>
  );
};

export default BackToTopNavigation;
