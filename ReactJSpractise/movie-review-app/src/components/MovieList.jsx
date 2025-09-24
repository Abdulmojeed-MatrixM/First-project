import React, { useEffect, useState, useCallback } from "react";
import { fetchMoviesCategory, searchMovies } from "../utils/fetchMovies";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import MovieDetailsModal from "./MovieDetailsModal";
import Watchlist from "./Watchlist";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("now_playing");
  const [activeFilter, setActiveFilter] = useState("now_playing");
  const [loading, setLoading] = useState(true);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [watchlist, setWatchlist] = useState(()=> {
    try {
      const raw = localStorage.getItem("watchlist");
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });
  const [showWatchlist, setShowWatchlist] = useState(false);

  const loadMovies = useCallback(async (cat="now_playing")=>{
    setLoading(true);
    const data = await fetchMoviesCategory(cat);
    setMovies(data);
    setFiltered(data);
    setLoading(false);
  },[]);

  useEffect(()=>{
    loadMovies(category);
  }, [category, loadMovies]);

  /** Search handler */
  const handleSearch = async (q) => {
    if (!q) { setFiltered(movies); return; }
    setLoading(true);
    const res = await searchMovies(q);
    setFiltered(res);
    setLoading(false);
  };

  /** Filter/Sort handler */
  const handleFilter = (type) => {
    setActiveFilter(type);
    if (type === "reset") { setFiltered(movies); setCategory("now_playing"); return; }
    if (["now_playing","popular","top_rated"].includes(type)) {
      setCategory(type);
      return;
    }
    if (type === "rating") {
      setFiltered(prev => [...prev].sort((a,b)=> b.vote_average - a.vote_average));
      return;
    }
    if (type === "date") {
      setFiltered(prev => [...prev].sort((a,b)=> new Date(b.release_date) - new Date(a.release_date)));
      return;
    }
  };

  /** Watchlist functions */
  const isInWatchlist = (movie) => watchlist.some(m => m.id === movie.id);

  const toggleWatchlist = (movie) => {
    setWatchlist(prev => {
      const exists = prev.some(m => m.id === movie.id);
      let next;
      if (exists) next = prev.filter(m => m.id !== movie.id);
      else next = [...prev, movie];
      localStorage.setItem("watchlist", JSON.stringify(next));
      return next;
    });
  };

  return (
    <div>
      <div className="controls">
        <SearchBar onSearch={handleSearch} />
        <FilterBar onFilter={handleFilter} active={activeFilter} />
        <div style={{marginLeft:"auto"}}>
          <button className="btn ghost" onClick={()=> setShowWatchlist(prev => !prev)}>{showWatchlist ? "Hide Watchlist":"Show Watchlist"}</button>
        </div>
      </div>

      {showWatchlist && <Watchlist movies={watchlist} onToggleWatchlist={toggleWatchlist} onOpenDetails={(id)=>setSelectedMovieId(id)} />}

      {loading ? <p className="empty">Loading movies…</p> : (
        filtered.length === 0 ? <p className="empty">No movies found.</p> : (
          <div className="grid">
            {filtered.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onOpenDetails={(id)=>setSelectedMovieId(id)}
                onToggleWatchlist={toggleWatchlist}
                isInWatchlist={isInWatchlist(movie)}
              />
            ))}
          </div>
        )
      )}

      {selectedMovieId && <MovieDetailsModal movieId={selectedMovieId} onClose={()=>setSelectedMovieId(null)} onToggleWatchlist={toggleWatchlist} isInWatchlist={isInWatchlist({id:selectedMovieId})} />}
    </div>
  );
};

export default MovieList;
