import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const Learning = () => {
  const { id } = useParams();

  const [progress, setProgress] = useState(65);

  const lessons = [
    "Introduction",
    "Installation",
    "Components",
    "Props",
    "State",
    "Hooks",
    "React Router",
    "API Integration",
    "Final Project",
  ];

  const completeCourse = () => {
    setProgress(100);
    alert("🎉 Course Completed Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          🎓 Learning Dashboard
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Video Section */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">

            <iframe
              className="w-full h-[450px] rounded-xl"
              src="https://www.youtube.com/embed/bMknfKXIFA8"
              title="React Course"
              allowFullScreen
            ></iframe>

            <h2 className="text-3xl font-bold mt-6">
              React Complete Course
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Learn React from beginner to advanced with practical projects,
              routing, hooks, API integration and best practices.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-8">

              <div className="bg-blue-100 dark:bg-blue-900 rounded-xl p-5 text-center">
                <h3 className="font-bold">👨‍🏫 Instructor</h3>
                <p>John Smith</p>
              </div>

              <div className="bg-green-100 dark:bg-green-900 rounded-xl p-5 text-center">
                <h3 className="font-bold">⏳ Duration</h3>
                <p>8 Weeks</p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900 rounded-xl p-5 text-center">
                <h3 className="font-bold">⭐ Rating</h3>
                <p>4.9 / 5</p>
              </div>

            </div>

          </div>

          {/* Lessons */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              📚 Course Lessons
            </h2>

            <div className="space-y-4">

              {lessons.map((lesson, index) => (

                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <span>{lesson}</span>

                  <button className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition">
                    ✓
                  </button>

                </div>

              ))}

            </div>

            <button
              onClick={completeCourse}
              className="w-full mt-8 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
            >
              Complete Course
            </button>

            {progress === 100 && (
              <Link
                to="/certificate/React%20Complete%20Course"
                className="block text-center mt-4 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
              >
                🎓 Download Certificate
              </Link>
            )}

            <Link
              to="/mylearning"
              className="block text-center mt-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Back to My Learning
            </Link>

          </div>

        </div>

        {/* Progress */}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl mt-10 p-8">

          <h2 className="text-2xl font-bold mb-6">
            📊 Course Progress
          </h2>

          <div className="w-full bg-gray-300 rounded-full h-5">

            <div
              className="bg-green-600 h-5 rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

          <p className="mt-4 text-lg font-semibold">
            {progress}% Completed
          </p>

        </div>

      </div>

    </div>
  );
};

export default Learning;