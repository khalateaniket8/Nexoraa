import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  return (
    <section className="py-10 px-6 bg-gray-100 dark:bg-gray-800 transition-all duration-300">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Find Your Favorite Course
        </h2>

        <div className="relative">

          <FaSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
          />

          <input
            type="text"
            placeholder="Search React, Python, AWS, Tailwind..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-5 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 transition"
          />

        </div>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-4">
          Search from our collection of professional online courses.
        </p>

      </div>

    </section>
  );
};

export default SearchBar;