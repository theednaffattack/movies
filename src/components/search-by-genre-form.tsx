import type { Movie } from "../pages/home";
import { searchMovies } from "../services/api";
import { GenreCheckboxes } from "./genre-checkboxes";

export function SearchByGenreForm({
  setError,
  loading,
  setLoading,
  setMovies,
  searchQuery,
  setSearchQuery,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  searchQuery: { search: string; category: string };
  setSearchQuery: React.Dispatch<
    React.SetStateAction<{ search: string; category: string }>
  >;
}) {
  async function handleSearch(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    // If search is blank or all spaces, do not search
    if (!searchQuery.search.trim()) return;
    // If the page is in a loading state, do not search
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery.search);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err as string);
    } finally {
      setLoading(false);
    }

    setSearchQuery({ search: "", category: "All" });
  }

  return (
    <form onSubmit={handleSearch} className="search-form">
      <GenreCheckboxes />
      <button type="submit" className="search-button">
        Search by Title
      </button>
    </form>
  );
}
