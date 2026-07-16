import CourseCard from "./CourseCard";
import courses from "../data/courses";

const CourseGrid = () => {
  return (
    <section className="py-16 px-6 bg-white" id="courses">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseGrid;