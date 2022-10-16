import React from "react";
import { Link } from "react-router-dom";
import "./../styles/style.css";
import logo from "./../assets/logo.png";

function Header() {
  return (
    <div className="header-section">
      <div className="left">
        <img src={logo} alt="logo" />
        Harley's Free Photo App
      </div>
      <div className="right">
        <Link to="/">Explore</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Header;
