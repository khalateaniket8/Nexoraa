import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const enrolled =
    JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-all duration-300 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Student Dashboard
      </h1>

      <h2 className="text-xl mb-8">
        Welcome,
        <span className="text-blue-600 font-bold">
          {" "}
          {user?.name || "Student"}
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-all duration-300">
          <h2 className="text-3xl">📚</h2>
          <h3 className="text-2xl font-bold mt-3">
            {enrolled.length}
          </h3>
          <p>Enrolled Courses</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-all duration-300">
          <h2 className="text-3xl">❤️</h2>
          <h3 className="text-2xl font-bold mt-3">
            {wishlist.length}
          </h3>
          <p>Wishlist</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-all duration-300">
          <h2 className="text-3xl">🏆</h2>
          <h3 className="text-2xl font-bold mt-3">
            5
          </h3>
          <p>Certificates</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-all duration-300">
          <h2 className="text-3xl">⏳</h2>
          <h3 className="text-2xl font-bold mt-3">
            75%
          </h3>
          <p>Learning Progress</p>
        </div>

      </div>

      <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all duration-300">

        <h2 className="text-2xl font-bold mb-5">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-5">
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Courses
          </Link>

          <Link
            to="/mylearning"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Continue Learning
          </Link>

          <Link
            to="/wishlist"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Wishlist
          </Link>

          <Link
            to="/profile"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Profile
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;

