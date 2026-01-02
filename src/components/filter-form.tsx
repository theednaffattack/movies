export function FilterForm({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: { search: string; category: string };
  setSearchQuery: React.Dispatch<
    React.SetStateAction<{ search: string; category: string }>
  >;
}) {
  function handleSearch(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
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
