import React from "react";
import {
  CheckCircle,
  BookOpen,
  Award,
  Heart,
} from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      icon: <CheckCircle size={20} />,
      title: "Completed React Basics",
      time: "Today",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Started Tailwind CSS",
      time: "Yesterday",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Award size={20} />,
      title: "Earned JavaScript Certificate",
      time: "2 Days Ago",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Heart size={20} />,
      title: "Added Docker Course to Wishlist",
      time: "3 Days Ago",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">

      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:shadow-md dark:border-gray-700"
          >
            <div className="flex items-center gap-4">

              <div className={`rounded-full p-3 ${activity.color}`}>
                {activity.icon}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {activity.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {activity.time}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default RecentActivity;