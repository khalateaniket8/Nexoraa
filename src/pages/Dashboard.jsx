import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const enrolled =
    JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  const activities = [
    "Completed React Basics",
    "Started Tailwind CSS",
    "Earned JavaScript Certificate",
    "Added Docker Course to Wishlist",
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white p-8">

      <h1 className="text-4xl font-bold">
        Student Dashboard
      </h1>

      <p className="mt-2 text-lg">
        Welcome,
        <span className="text-blue-600 font-bold">
          {" "}
          {user?.name || "Student"}
        </span>
      </p>

      {/* Statistics */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">

          <h2 className="text-4xl">📚</h2>

          <h3 className="text-3xl font-bold mt-4">
            {enrolled.length}
          </h3>

          <p className="text-gray-500">
            Enrolled Courses
          </p>

        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">

          <h2 className="text-4xl">❤️</h2>

          <h3 className="text-3xl font-bold mt-4">
            {wishlist.length}
          </h3>

          <p className="text-gray-500">
            Wishlist
          </p>

        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">

          <h2 className="text-4xl">🏆</h2>

          <h3 className="text-3xl font-bold mt-4">
            5
          </h3>

          <p className="text-gray-500">
            Certificates
          </p>

        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">

          <h2 className="text-4xl">⭐</h2>

          <h3 className="text-3xl font-bold mt-4">
            4.9
          </h3>

          <p className="text-gray-500">
            Average Rating
          </p>

        </div>

      </div>

      {/* Progress */}

      <div className="bg-white dark:bg-gray-800 mt-10 rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-5">
          Overall Learning Progress
        </h2>

        <div className="w-full bg-gray-300 rounded-full h-5">

          <div
            className="bg-blue-600 h-5 rounded-full"
            style={{
              width: "75%",
            }}
          ></div>

        </div>

        <p className="mt-3 font-semibold">
          75% Completed
        </p>

      </div>

      {/* Recent Activity */}

      <div className="bg-white dark:bg-gray-800 mt-10 rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-5">
          Recent Activity
        </h2>

        <div className="space-y-4">

          {activities.map((item, index) => (

            <div
              key={index}
              className="border-l-4 border-blue-600 pl-4"
            >
              ✅ {item}
            </div>

          ))}

        </div>

      </div>

      {/* Quick Actions */}

      <div className="bg-white dark:bg-gray-800 mt-10 rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-5">

          <Link
            to="/courses"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Browse Courses
          </Link>

          <Link
            to="/mylearning"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Continue Learning
          </Link>

          <Link
            to="/wishlist"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
          >
            Wishlist
          </Link>

          <Link
            to="/profile"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Profile
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;

