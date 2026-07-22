import { Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  Award,
  Star,
} from "lucide-react";

import ProgressSection from "../components/dashboard/ProgressSection";
import RecentActivity from "../components/dashboard/RecentActivity";

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

          <DashboardCard
            icon={<BookOpen />}
            title="Enrolled Courses"
            value={enrolled.length}
            color="text-blue-600"
          />

          <DashboardCard
            icon={<Heart />}
            title="Wishlist"
            value={wishlist.length}
            color="text-pink-600"
          />

          <DashboardCard
            icon={<Award />}
            title="Certificates"
            value="5"
            color="text-yellow-500"
          />

          <DashboardCard
            icon={<Star />}
            title="Average Rating"
            value="4.9"
            color="text-green-600"
          />

        </div>

        {/* Progress */}

        <div className="mt-10">

          <ProgressSection
            progress={75}
            completed={9}
            total={12}
          />

        </div>

        {/* Activity */}

        <div className="mt-10">

          <RecentActivity />

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

