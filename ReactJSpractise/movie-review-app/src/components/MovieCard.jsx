import React from "react";

/** helper */
const IMG_BASE = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, onOpenDetails, onToggleWatchlist, isInWatchlist }) => {
  return (
    <div className="card">
      <img
        className="poster"
        src={movie.poster_path ? `${IMG_BASE}${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
        alt={movie.title}
      />
      <div className="card-body">
        <div className="title-row">
          <h3 className="title">{movie.title}</h3>
          <div className="rating">⭐ {movie.vote_average?.toFixed(1)}</div>
        </div>

        <div className="meta">{movie.release_date}</div>
        <p className="overview">{movie.overview ? movie.overview.slice(0,160) + "…" : "No description."}</p>

        <div className="actions">
          <button className="btn primary" onClick={()=> onOpenDetails(movie.id)}>Details</button>
          <button className="btn ghost" onClick={()=> onToggleWatchlist(movie)}>
            {isInWatchlist ? "Remove" : "Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
