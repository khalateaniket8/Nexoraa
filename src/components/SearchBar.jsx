import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({
  search,
  setSearch,
  totalCourses = 0,
}) => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-6 py-10 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">

      <div className="mx-auto max-w-5xl">

        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
          Find Your Perfect Course
        </h2>

        <p className="mt-3 text-center text-gray-500 dark:text-gray-300">
          Search from {totalCourses} professional courses
        </p>

        <div className="relative mt-8">

          <FaSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            placeholder="Search React, Python, Java, AWS..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-14 pr-14 text-lg shadow-lg outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-500 transition hover:bg-red-100 hover:text-red-600 dark:hover:bg-gray-700"
            >
              <FaTimes />
            </button>
          )}

        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            React
          </span>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Python
          </span>

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
            AWS
          </span>

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            UI/UX
          </span>

          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700">
            JavaScript
          </span>

        </div>

      </div>

    </section>
  );
};

export default SearchBar;