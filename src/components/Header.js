import React from "react";
import { Link } from "react-router-dom";
import "./../styles/style.css";

function Header() {
  return (
    <div className="header-section">
      <Link to="/">Explore</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
