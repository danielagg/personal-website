import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy; Daniel Agg, {new Date().getFullYear()}.</p>
    </div>
  );
};

export default Footer;
