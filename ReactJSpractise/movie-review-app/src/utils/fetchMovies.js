import axios from "axios";

// Replace with your TMDB API key
const API_KEY = "YOUR_TMDB_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query = "popular") => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${query}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
