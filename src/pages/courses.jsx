import { useState } from "react";
import CourseGrid from "../components/CourseGrid";
import courses from "../data/courses";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        course.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "az") {
        return a.title.localeCompare(b.title);
      }

      if (sort === "za") {
        return b.title.localeCompare(a.title);
      }

      if (sort === "progress") {
        return b.progress - a.progress;
      }

      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        All Courses
      </h1>

      {/* Search + Filter */}
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md mb-10">

        <div className="grid md:grid-cols-3 gap-5">

          <input
            type="text"
            placeholder="Search Course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-3 rounded-lg"
          >
            {categories.map((cat, index) => (
              <option
                key={index}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option value="default">
              Default
            </option>

            <option value="az">
              A - Z
            </option>

            <option value="za">
              Z - A
            </option>

            <option value="progress">
              Highest Progress
            </option>

          </select>

        </div>

        <p className="mt-5 text-gray-600 font-semibold">
          Total Courses Found : {filteredCourses.length}
        </p>

      </div>

      <CourseGrid courses={filteredCourses} />

    </div>
  );
};

export default Courses;