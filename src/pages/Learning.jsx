import { useParams, Link } from "react-router-dom";

const Learning = () => {
  const { id } = useParams();

  const lessons = [
    "Introduction",
    "Installation",
    "Components",
    "Props",
    "State",
    "Hooks",
    "Routing",
    "Final Project",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          🎓 Learning Dashboard
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Video Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">

            <iframe
              className="w-full h-[450px] rounded-xl"
              src="https://www.youtube.com/embed/bMknfKXIFA8"
              title="React Tutorial"
              allowFullScreen
            ></iframe>

            <h2 className="text-3xl font-bold mt-6">
              React Complete Course
            </h2>

            <p className="text-gray-600 mt-4">
              Welcome to your learning journey. Watch the video and complete the lessons one by one.
            </p>

          </div>

          {/* Lessons */}
          <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-6">
              📚 Course Lessons
            </h2>

            {lessons.map((lesson, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-4"
              >
                <span>{lesson}</span>

                <button
                  className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
                >
                  Complete
                </button>
              </div>
            ))}

            <Link
              to="/mylearning"
              className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Back to My Learning
            </Link>

          </div>

        </div>

        {/* Progress */}
        <div className="bg-white rounded-xl shadow-lg mt-10 p-6">

          <h2 className="text-2xl font-bold mb-4">
            📊 Course Progress
          </h2>

          <div className="w-full bg-gray-300 rounded-full h-5">

            <div
              className="bg-green-600 h-5 rounded-full"
              style={{ width: "65%" }}
            ></div>

          </div>

          <p className="mt-3 text-lg">
            Progress : <strong>65%</strong>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Learning;