import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header className="text-center py-6 bg-gray-900 text-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
    </header>
  );
};

export default Header;
