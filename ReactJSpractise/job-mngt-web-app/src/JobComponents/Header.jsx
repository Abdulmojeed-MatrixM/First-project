import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src={require("../JobComponents/logo5.jpg")} // Adjust path if needed
        alt="Logo"
        className="logo"
      />
      <h1 className="title">Job Board</h1>
    </header>
  );
};

export default Header;
