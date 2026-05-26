function SearchBar({
  search,
  setSearch,
  darkMode,
}) {

  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`w-full rounded-xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 border ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-white"
            : "bg-white border-gray-300 text-black"
        }`}
      />
    </div>
  );
}

export default SearchBar;