import React, { useEffect, useState } from "react";
import { fetchMovies } from "../utils/fetchMovies";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies("now_playing");
      setMovies(data);
      setFiltered(data);
    };
    loadMovies();
  }, []);

  const handleSearch = (query) => {
    const results = movies.filter((m) =>
      m.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
  };

  const handleFilter = (type) => {
    if (type === "rating") {
      setFiltered([...movies].sort((a, b) => b.vote_average - a.vote_average));
    } else if (type === "date") {
      setFiltered([...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date)));
    } else {
      setFiltered(movies);
    }
  };

  return (
    <div className="movie-list">
      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilter={handleFilter} />
      <div className="grid">
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
