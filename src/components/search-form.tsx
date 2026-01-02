import type { Movie } from "../pages/home";
import { searchMovies } from "../services/api";

export function SearchForm({
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
  function handleCategoryChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    evt.preventDefault();
    setSearchQuery({ ...searchQuery, category: evt.target.value });
  }
  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search for movies..."
        className="search-input"
        value={searchQuery.search}
        onChange={(evt) =>
          setSearchQuery({
            ...searchQuery,
            search: evt.target.value,
          })
        }
      />
      <select value={searchQuery.category} onChange={handleCategoryChange}>
        <option value="All">All Categories</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        {/* ... other categories */}
      </select>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
