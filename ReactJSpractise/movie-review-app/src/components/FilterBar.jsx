import React from "react";

const FilterBar = ({ onFilter, active }) => {
  return (
    <div className="filter-bar">
      <button className={active==="popular" ? "active":""} onClick={()=>onFilter("popular")}>Popular</button>
      <button className={active==="now_playing" ? "active":""} onClick={()=>onFilter("now_playing")}>Now Playing</button>
      <button className={active==="top_rated" ? "active":""} onClick={()=>onFilter("top_rated")}>Top Rated</button>
      <button className={active==="date" ? "active":""} onClick={()=>onFilter("date")}>Sort by Date</button>
      <button className={active==="rating" ? "active":""} onClick={()=>onFilter("rating")}>Sort by Rating</button>
      <button className={active==="reset" ? "active":""} onClick={()=>onFilter("reset")}>Reset</button>
    </div>
  );
};

export default FilterBar;
