import React from "react";
import { Link } from "react-router-dom";
import "./../styles/style.css";
import logo from "./../assets/logo.png";

function Header() {
  return (
    <div className="header-section">
      <div className="left">
        <img src={logo} alt="logo" />
        <Link to="/">Harley's Free Photo App</Link>
      </div>
      <div className="right">
        <Link to="/">Explore</Link>
        {/* TO DO: Uncomment when about page is done */}
        {/* <Link to="/about">About</Link> */}
        <a
          target="_blank"
          href="https://github.com/brookhaven13"
          rel="noreferrer"
        >
          About
        </a>
      </div>
    </div>
  );
}

export default Header;
