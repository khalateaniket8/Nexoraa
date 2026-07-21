import CourseCard from "./CourseCard";

const CourseGrid = ({ courses, onViewDetails }) => {
  return (
    <section
      className="py-16 px-6 bg-white dark:bg-gray-900 transition-all duration-300"
      id="courses"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Featured Courses
        </h2>

        {/* No Courses Found */}
        {courses.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-300 text-xl">
            No Courses Found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={onViewDetails}
              />
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default CourseGrid;