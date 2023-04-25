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
          <Link to="https://github.com/OAkinbode">My Github Account</Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/olusolaakinbode/">
            My LinkedIn Account
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
