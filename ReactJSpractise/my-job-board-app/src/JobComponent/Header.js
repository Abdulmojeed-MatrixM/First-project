import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src={require("../JobComponent/logo5.jpg")}
        alt="Logo"
        className="logo"
      />
      <h1 className="title">Job Board</h1>
    </header>
  );
};

export default Header;
