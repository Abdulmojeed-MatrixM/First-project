import React, { useEffect, useState } from "react";
import { fetchMovieDetails, fetchMovieReviews } from "../utils/fetchMovies";

const IMG = "https://image.tmdb.org/t/p/w500";

const MovieDetailsModal = ({ movieId, onClose, onToggleWatchlist, isInWatchlist }) => {
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    let mounted = true;
    const load = async () => {
      setLoading(true);
      const det = await fetchMovieDetails(movieId);
      const rev = await fetchMovieReviews(movieId);
      if (!mounted) return;
      setMovie(det);
      setReviews(rev);
      setLoading(false);
    };
    load();
    return ()=> { mounted=false; }
  }, [movieId]);

  if (!movie && loading) {
    return <div className="modal-overlay"><div className="modal">Loading...</div></div>
  }

  const rating = movie?.vote_average;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
          <img src={movie.poster_path ? `${IMG}${movie.poster_path}` : "https://via.placeholder.com/300x450"} alt={movie.title} style={{width:180,borderRadius:8}}/>
          <div style={{flex:1}}>
            <div style={{display:"flex", alignItems:"center", gap:8}}>
              <h2 style={{margin:0}}>{movie.title}</h2>
              <div style={{marginLeft:"auto"}}><strong>⭐ {rating?.toFixed(1)}</strong></div>
            </div>
            <p style={{color:"#9aa4b2"}}>{movie.tagline}</p>
            <p style={{color:"#cbd6e1"}}>{movie.overview}</p>
            <p style={{color:"#9aa4b2"}}>Release: {movie.release_date} • Runtime: {movie.runtime} mins</p>
            <div style={{marginTop:12, display:"flex", gap:8}}>
              <button className="btn primary" onClick={()=> onToggleWatchlist(movie)}>{isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}</button>
              <button className="btn ghost" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>

        <section style={{marginTop:18}}>
          <h3 style={{marginBottom:8}}>Reviews</h3>
          {reviews.length === 0 ? <p className="empty">No reviews available.</p> : (
            reviews.map((r)=>(
              <div className="review" key={r.id}>
                <h4>{r.author}</h4>
                <p>{r.content.slice(0,1000)}</p>
                <small style={{color:"#9aa4b2"}}>Updated at: {new Date(r.updated_at).toLocaleString()}</small>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
