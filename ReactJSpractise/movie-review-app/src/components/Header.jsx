import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">🎬 Movie Review App</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/watch">Watchlist</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
