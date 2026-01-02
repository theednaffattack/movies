import "../css/movie-card.css";

export function MovieCard({
  releaseDate,
  title,
  url,
}: {
  url: string;
  releaseDate: string;
  title: string;
}) {
  function onFavoriteClick() {
    alert("favorite clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={url} alt={title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
}
