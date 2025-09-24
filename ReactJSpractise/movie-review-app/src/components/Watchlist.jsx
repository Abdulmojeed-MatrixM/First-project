import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ movies, onToggleWatchlist, onOpenDetails }) => {
  return (
    <section style={{marginBottom:16}}>
      <h3 style={{margin:"8px 0"}}>Your Watchlist ({movies.length})</h3>
      {movies.length === 0 ? <div className="empty">No saved movies yet.</div> : (
        <div className="grid">
          {movies.map(m => (
            <MovieCard key={m.id} movie={m} onOpenDetails={onOpenDetails} onToggleWatchlist={onToggleWatchlist} isInWatchlist={true} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Watchlist;
