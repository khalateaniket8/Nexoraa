import { useEffect, useRef } from "react";

const CourseDetailsModal = ({ course, onClose }) => {
  const open = Boolean(course);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={course?.title || "Course details"}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-900"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300 dark:hover:bg-gray-800"
          aria-label="Close course details"
        >
          <span aria-hidden="true">✕</span>
          <span className="sr-only">Close course details</span>
        </button>

        <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row">
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full rounded-3xl object-cover md:w-72"
            />

            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{course.title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Category: {course.category} • Status: {course.status || "In Progress"}
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-200">{course.description}</p>

              <div className="rounded-3xl bg-gray-100 p-4 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Progress</p>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-full rounded-full bg-blue-600" style={{ width: `${course.progress}%` }} />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{course.progress}% complete</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-[0.98]">
                  Continue Learning
                </button>
                <button className="rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What you'll learn</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-200">
              <li>Core concepts and fundamentals</li>
              <li>Practical examples and exercises</li>
              <li>Project-based learning</li>
              <li>Best practices and tips</li>
              <li>Support for real-world workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModal;