import React from "react";

const Header = ({ onGoToWatchlist }) => {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">MV</div>
        <h1>Movie Review App</h1>
      </div>
      <nav className="nav">
        <a href="#" onClick={(e)=>e.preventDefault()}>Home</a>
        <a href="#" onClick={(e)=>{ e.preventDefault(); onGoToWatchlist(); }}>Watchlist</a>
      </nav>
    </header>
  );
};

export default Header;
