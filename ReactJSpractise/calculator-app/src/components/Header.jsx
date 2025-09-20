// Header.jsx
import React from "react";
import logo from "../assets/logo.jpg"; // place logo.jpg inside src/assets/
import "../App.css";

/**
 * Reusable Header component. Title and subtitle are customizable via props.
 */
const Header = ({ title = "Investment Calculator", subtitle }) => {
  return (
    <header id="header" className="header">
      <img src={logo} alt="Investment Calculator Logo" className="header-logo" />
      <div className="header-text">
        <h1 className="header-title">{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
};

export default Header;
