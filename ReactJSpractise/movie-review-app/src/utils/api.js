import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
if (!API_KEY) {
  console.warn("VITE_TMDB_API_KEY is not set. Add it to your .env file.");
}

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});
