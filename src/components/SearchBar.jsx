import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="max-w-3xl mx-auto my-12 px-6">

      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-5 py-4 outline-none"
        />

        <button className="bg-blue-600 text-white px-6">
          <FaSearch />
        </button>

      </div>

    </div>
  );
};

export default SearchBar;