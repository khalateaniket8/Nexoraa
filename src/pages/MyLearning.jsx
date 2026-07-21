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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">
          My Learning
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-300 mb-10">
          Continue your learning journey 🚀
        </p>

        {courses.length === 0 ? (

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center">

            <h2 className="text-3xl font-bold mb-4">
              📚 No Enrolled Courses
            </h2>

            <p className="text-gray-500 dark:text-gray-300 mb-8">
              Start learning by enrolling in your first course.
            </p>

            <Link
              to="/courses"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Explore Courses
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {courses.map((course) => (

              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    {course.title}
                  </h2>

                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center mt-5">

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {course.category}
                    </span>

                    <span className="font-bold text-green-600">
                      ⭐ {course.rating || 4.8}
                    </span>

                  </div>

                  {/* Progress */}

                  <div className="mt-6">

                    <div className="flex justify-between mb-2">

                      <span>Progress</span>

                      <span>{course.progress}%</span>

                    </div>

                    <div className="w-full bg-gray-300 rounded-full h-3">

                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                        style={{
                          width: `${course.progress}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                  {/* Buttons */}

                  <div className="grid grid-cols-2 gap-3 mt-8">

                    <Link
                      to={`/learning/${course.id}`}
                      className="bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition"
                    >
                      Continue
                    </Link>

                    {course.progress === 100 ? (

                      <Link
                        to={`/certificate/${course.title}`}
                        className="bg-purple-600 text-white text-center py-3 rounded-lg hover:bg-purple-700 transition"
                      >
                        Certificate
                      </Link>

                    ) : (

                      <button
                        disabled
                        className="bg-gray-300 text-gray-600 py-3 rounded-lg cursor-not-allowed"
                      >
                        Locked
                      </button>

                    )}

                  </div>

                  {/* Extra Details */}

                  <div className="grid grid-cols-2 gap-4 mt-8 text-sm">

                    <div>

                      <p className="text-gray-500 dark:text-gray-400">
                        Instructor
                      </p>

                      <p className="font-semibold">
                        {course.instructor || "John Doe"}
                      </p>

                    </div>

                    <div>

                      <p className="text-gray-500 dark:text-gray-400">
                        Duration
                      </p>

                      <p className="font-semibold">
                        {course.duration || "8 Weeks"}
                      </p>

                    </div>

                    <div>

                      <p className="text-gray-500 dark:text-gray-400">
                        Lessons
                      </p>

                      <p className="font-semibold">
                        {course.lessons || 40}
                      </p>

                    </div>

                    <div>

                      <p className="text-gray-500 dark:text-gray-400">
                        Level
                      </p>

                      <p className="font-semibold">
                        {course.level || "Beginner"}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default MyLearning;