import React from "react";

const ProgressSection = ({
  progress = 75,
  completed = 9,
  total = 12,
}) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Overall Learning Progress
        </h2>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
          {progress}%
        </span>

      </div>

      <div className="mt-6 h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">

        <div
          className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

      <div className="mt-6 flex justify-between text-sm text-gray-600 dark:text-gray-300">

        <span>
          Completed Courses
          <strong className="ml-2">
            {completed}
          </strong>
        </span>

        <span>
          Total Courses
          <strong className="ml-2">
            {total}
          </strong>
        </span>

      </div>

    </div>
  );
};

export default ProgressSection;