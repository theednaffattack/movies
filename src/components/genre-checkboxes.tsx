import { movieGenreIds } from "../services/genre_ids";

export function GenreCheckboxes() {
  return (
    <div>
      {Object.entries(movieGenreIds).map((genre, idx) => (
        <div key={idx}>
          <input
            type="checkbox"
            id={genre[1].toString()}
            name={genre[1].toString()}
            // checked
          />
          <label htmlFor={genre[1].toString()}>{genre[0]}</label>
        </div>
      ))}
    </div>
  );
}
