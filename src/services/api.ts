import { movieGenreIds } from "./genre_ids";

const BASE_URL = "https://api.themoviedb.org/3";
const GENRE_BASE_URL = "https://api.themoviedb.org/3/discover/movie";

const queryParam = "with_genres";
const testUrl2 = `${GENRE_BASE_URL}?${queryParam}=${movieGenreIds.documentary}|${movieGenreIds.action}`;
const testUrl =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35%7C99";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query: string) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
}

export async function searchMoviesByGenre(query: string) {
  const response = await fetch(testUrl, options);
  const data = await response.json();
  console.log("SEARFCH BY GENRE", data);

  return data.results;
}
