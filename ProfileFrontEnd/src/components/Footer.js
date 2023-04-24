import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/patient-feedback">Projects</Link>
        </li>
        <li>
          <Link to="/glossary">ContactMe</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
