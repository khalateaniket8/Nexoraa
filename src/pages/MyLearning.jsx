import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyLearning = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const enrolled =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    setCourses(enrolled);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        My Learning
      </h1>

      {courses.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl text-gray-500">
            No Enrolled Courses
          </h2>

          <Link
            to="/courses"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Explore Courses
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold">
                  {course.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {course.description}
                </p>

                <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {course.category}
                </span>

                <div className="mt-5">
                  <p className="mb-2">
                    Progress: {course.progress}%
                  </p>

                  <div className="w-full bg-gray-300 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="block text-center mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                >
                  Continue Learning
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLearning;