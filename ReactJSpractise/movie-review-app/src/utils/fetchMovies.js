import { tmdb } from "./api";

/**
 * Fetch movie list categories: 'now_playing' | 'popular' | 'top_rated' etc.
 */
export async function fetchMoviesCategory(category = "now_playing", page = 1) {
  try {
    const res = await tmdb.get(`/movie/${category}`, { params: { page } });
    return res.data.results || [];
  } catch (err) {
    console.error("fetchMoviesCategory error", err);
    return [];
  }
}

/** Search movies by query */
export async function searchMovies(query, page = 1) {
  try {
    const res = await tmdb.get("/search/movie", { params: { query, page, include_adult: false } });
    return res.data.results || [];
  } catch (err) {
    console.error("searchMovies error", err);
    return [];
  }
}

/** Get details for a single movie (optionally include videos) */
export async function fetchMovieDetails(movieId) {
  try {
    const res = await tmdb.get(`/movie/${movieId}`, { params: { append_to_response: "videos" } });
    return res.data;
  } catch (err) {
    console.error("fetchMovieDetails error", err);
    return null;
  }
}

/** Fetch reviews for a movie (TMDB reviews endpoint) */
export async function fetchMovieReviews(movieId, page = 1) {
  try {
    const res = await tmdb.get(`/movie/${movieId}/reviews`, { params: { page } });
    return res.data.results || [];
  } catch (err) {
    console.error("fetchMovieReviews error", err);
    return [];
  }
}
