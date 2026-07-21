import { useEffect } from "react";

const CourseDetailsModal = ({ course, onClose }) => {
  useEffect(() => {
    if (!course) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Save current body overflow
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 shadow-2xl animate-[fadeIn_.3s_ease]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white transition hover:bg-red-600"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={course.image}
          alt={course.title}
          className="h-64 w-full rounded-t-2xl object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {course.title}
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-100 px-4 py-1 text-blue-700">
              {course.category}
            </span>

            <span className="rounded-full bg-green-100 px-4 py-1 text-green-700">
              {course.progress}% Completed
            </span>
          </div>

          <p className="mt-6 leading-7 text-gray-600 dark:text-gray-300">
            {course.description}
          </p>

          {/* Progress */}
          <div className="mt-8">
            <div className="mb-2 flex justify-between">
              <span className="font-semibold dark:text-white">
                Progress
              </span>

              <span className="font-semibold text-blue-600">
                {course.progress}%
              </span>
            </div>

            <div className="h-4 w-full rounded-full bg-gray-300">
              <div
                className="h-4 rounded-full bg-blue-600 transition-all duration-500"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Course Features
              </h3>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✔ Lifetime Access</li>
                <li>✔ HD Video Lectures</li>
                <li>✔ Downloadable Resources</li>
                <li>✔ Practical Projects</li>
                <li>✔ Certificate of Completion</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Skills You'll Learn
              </h3>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• React.js</li>
                <li>• JavaScript ES6+</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive Web Design</li>
                <li>• Real World Projects</li>
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="mb-3 text-2xl font-bold dark:text-white">
              About This Course
            </h3>

            <p className="leading-8 text-gray-600 dark:text-gray-300">
              This course is specially designed for beginners as well as
              intermediate learners. You'll learn concepts step by step through
              practical projects and hands-on examples. By the end of the
              course, you'll be confident enough to build your own modern web
              applications.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
              Continue Learning
            </button>

            <button
              onClick={onClose}
              className="rounded-lg border border-gray-400 px-6 py-3 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModal;