import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <small>© {new Date().getFullYear()} Movie Review App • Data from TMDB</small>
    </footer>
  );
};

export default Footer;
