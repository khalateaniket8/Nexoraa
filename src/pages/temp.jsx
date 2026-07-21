import { useState } from "react";
import CourseGrid from "../components/CourseGrid";
import CourseDetailsModal from "../components/CourseDetailsModal";
import courses from "../data/courses";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = ["All", ...new Set(courses.map((course) => course.category))];

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || course.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      if (sort === "za") return b.title.localeCompare(a.title);
      if (sort === "progress") return b.progress - a.progress;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search Course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          >
            <option value="default">Default</option>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
            <option value="progress">Highest Progress</option>
          </select>
        </div>

        <p className="mb-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
          Total Courses Found: {filteredCourses.length}
        </p>

        <CourseGrid courses={filteredCourses} onViewDetails={setSelectedCourse} />
      </div>

      <CourseDetailsModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </div>
  );
};

export default Courses;