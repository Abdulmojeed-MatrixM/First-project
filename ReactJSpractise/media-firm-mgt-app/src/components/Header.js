import React from "react";
import "./../styles/Header.css";
import logo from "./logo5.jpg";

const Header = () => {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Media Firm Logo"
        className="logo"
      />
      <h1 className="title">Media Firm Management</h1>
    </header>
  );
};

export default Header;
