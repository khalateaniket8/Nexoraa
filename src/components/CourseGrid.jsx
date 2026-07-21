import React from "react";

const CourseGrid = ({ courses = [], onViewDetails }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <div
          key={course.id}
          className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-blue-600">
                {course.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">
                {course.title}
              </h3>
            </div>
            <div className="rounded-3xl bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">
              {course.progress}% 
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
            {course.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onViewDetails(course)}
              className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View Details
            </button>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200">
              {course.status || "In Progress"}
            </span>
          </div>
        </div>
      ))}

      {courses.length === 0 && (
        <div className="col-span-full rounded-3xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          No courses found. Change your search or filter to see results.
        </div>
      )}
    </div>
  );
};

export default CourseGrid;