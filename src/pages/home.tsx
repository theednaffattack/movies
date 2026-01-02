import { useEffect, useState } from "react";
import { FilterForm } from "../components/filter-form";
import { MovieCard } from "../components/movie-card";
import "../css/home.css";
import { getPopularMovies } from "../services/api";
import { SearchForm } from "../components/search-form";

export interface Movie {
  id: number;
  category: string;
  imgUrl: string;
  title: string;
  release_date: string;

  //
  original_language: string;
  adult: boolean;
  genre_ids: Array<number>;
  original_title: string;
  overview: string;
  popularity: number;
  backdrop_path: string; // image url
  poster_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export function Home() {
  const [searchQuery, setSearchQuery] = useState({
    search: "",
    category: "All",
  });

  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error("ERROR FETCHING MOVIES\n", err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const poster_url = "https://image.tmdb.org/t/p/w300";

  return (
    <div className="home">
      <FilterForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchForm
        setLoading={setLoading}
        loading={loading}
        setError={setError}
        setMovies={setMovies}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(({ id, poster_path, title, release_date }) => {
            return (
              <MovieCard
                url={`${poster_url}${poster_path}`}
                key={id}
                title={title}
                releaseDate={release_date?.split("-")[0]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
