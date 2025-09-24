import React from "react";
import "./FilterBar.css";

const FilterBar = ({ onFilter }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => onFilter("rating")}>Sort by Rating</button>
      <button onClick={() => onFilter("date")}>Sort by Release Date</button>
      <button onClick={() => onFilter("reset")}>Reset</button>
    </div>
  );
};

export default FilterBar;
