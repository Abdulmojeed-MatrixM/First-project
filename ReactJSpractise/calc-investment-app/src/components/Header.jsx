// Header.jsx
import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo.JPG"; // place logo8.jpg inside src/assets/
import "../App.css";

/**
 * Reusable Header component. Title and subtitle are customizable via props.
 */
const Header = ({
  title = "Investment Calculator",
  subtitle = "Calculate your investment returns easily",
}) => {
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

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Header;
