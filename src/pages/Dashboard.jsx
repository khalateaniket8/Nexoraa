import { Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  Award,
  Star,
} from "lucide-react";

const Dashboard = () => {
  const user =
    JSON.parse(localStorage.getItem("user")) || {
      name: "Student",
    };

  const enrolled =
    JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Welcome Back,
            <span className="text-blue-600">
              {" "}
              {user.name}
            </span>
            👋
          </h1>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Continue your learning journey and track your progress.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <BookOpen className="mb-4 text-blue-600" size={32} />
            <h3 className="text-gray-600 dark:text-gray-300">
              Enrolled Courses
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {enrolled.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <Heart className="mb-4 text-pink-600" size={32} />
            <h3 className="text-gray-600 dark:text-gray-300">
              Wishlist
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {wishlist.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <Award className="mb-4 text-yellow-500" size={32} />
            <h3 className="text-gray-600 dark:text-gray-300">
              Certificates
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              5
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <Star className="mb-4 text-green-600" size={32} />
            <h3 className="text-gray-600 dark:text-gray-300">
              Average Rating
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              4.9
            </p>
          </div>

        </div>

        {/* Progress */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Learning Progress
          </h2>

          <div className="mb-3 flex justify-between text-gray-600 dark:text-gray-300">
            <span>Course Progress</span>
            <span>75%</span>
          </div>

          <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-4 rounded-full bg-blue-600"
              style={{ width: "75%" }}
            ></div>
          </div>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Completed 9 of 12 courses
          </p>
        </div>

        {/* Recent Activity */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Recent Activity
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            You are making great progress in your learning journey! 🎓
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mt-10 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">

          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/courses"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Browse Courses
            </Link>

            <Link
              to="/learning"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Continue Learning
            </Link>

            <Link
              to="/wishlist"
              className="rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
            >
              Wishlist
            </Link>

            <Link
              to="/profile"
              className="rounded-xl bg-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Profile
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;

