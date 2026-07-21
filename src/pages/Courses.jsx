import CourseGrid from "../components/CourseGrid";
import coursesData from "../data/courses";

export default function Courses() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
        All Courses
      </h1>

      <CourseGrid
        courses={coursesData}
        onViewDetails={() => {}}
      />
    </div>
  );
}