import { MoviesGrid } from "../components/movies-grid";
import { useMovieContext } from "../contexts/movie-context";

export function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Favorites</h2>
        <MoviesGrid movies={favorites} />
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
  );
}
