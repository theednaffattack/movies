import { useMovieContext } from "../contexts/movie-context";
import "../css/movie-card.css";
import type { Movie } from "../pages/home";

export function MovieCard({ movie }: { movie: Movie }) {
  const poster_url = "https://image.tmdb.org/t/p/w300";
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } =
    useMovieContext();

  const favorite = isFavorite(movie.id);

  function onFavoriteClick(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster_url + movie.poster_path} alt={movie.title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
