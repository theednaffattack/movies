import type { Movie } from "../pages/home";
import { MovieCard } from "./movie-card";

export function MoviesGrid({ movies }: { movies: Movie[] }) {
  return (
    <div className="movies-grid">
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </div>
  );
}
