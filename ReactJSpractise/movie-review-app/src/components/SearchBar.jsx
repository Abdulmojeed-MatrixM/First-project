import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [q, setQ] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onSearch(q.trim());
  };

  return (
    <form className="search-bar" onSubmit={submit}>
      <input placeholder="Search movies..." value={q} onChange={(e)=>setQ(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
