import React from "react";
import CourseCard from "./CourseCard";

const CourseGrid = ({ courses = [], onViewDetails }) => {
  if (courses.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          No Courses Found 😔
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Try changing the search keyword or category filter.
        </p>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseGrid;