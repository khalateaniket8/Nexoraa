import { useEffect, useRef } from "react";
import {
  X,
  Star,
  Clock3,
  Users,
  Globe,
  BookOpen,
} from "lucide-react";

const CourseDetailsModal = ({ course, onClose }) => {
  const open = Boolean(course);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-900"
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-50 rounded-full bg-white p-2 shadow hover:bg-red-500 hover:text-white dark:bg-gray-800"
        >
          <X size={22} />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">

          {/* Top Section */}

          <div className="grid lg:grid-cols-2 gap-8 p-8">

            {/* Left */}

            <div>

              <img
                src={course.image}
                alt={course.title}
                className="h-72 w-full rounded-2xl object-cover shadow-lg"
              />

              <div className="mt-6 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <div className="flex items-center gap-2">
                    <Clock3 size={18} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span>{course.students}+ Students</span>
                  </div>
                </div>

                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <div className="flex items-center gap-2">
                    <Globe size={18} />
                    <span>{course.language}</span>
                  </div>
                </div>

                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} />
                    <span>{course.lessons} Lessons</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {course.category}
              </span>

              <h2 className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">
                {course.title}
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                {course.description}
              </p>

              {/* Rating */}

              <div className="mt-6 flex flex-wrap items-center gap-5">

                <div className="flex items-center gap-2 text-yellow-500">
                  <Star
                    size={20}
                    fill="currentColor"
                  />
                  <span className="font-semibold">
                    {course.rating}
                  </span>
                </div>

                <span className="text-3xl font-bold text-green-600">
                  {course.price}
                </span>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  {course.level}
                </span>

              </div>

              {/* Progress */}

              <div className="mt-8">

                <div className="mb-2 flex justify-between">

                  <span className="font-semibold dark:text-white">
                    Course Progress
                  </span>

                  <span className="font-bold text-blue-600">
                    {course.progress}%
                  </span>

                </div>

                <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700">

                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />

                </div>

              </div>
                            {/* Action Buttons */}

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="flex-1 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700">
                  Continue Learning
                </button>

                <button className="flex-1 rounded-xl border border-pink-500 px-6 py-4 font-semibold text-pink-600 transition hover:bg-pink-500 hover:text-white">
                  ❤️ Add to Wishlist
                </button>

              </div>

              {/* Instructor */}

              <div className="mt-8 rounded-2xl bg-gray-100 p-5 dark:bg-gray-800">

                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Instructor
                </h3>

                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  👨‍🏫 {course.instructor}
                </p>

              </div>

              {/* Course Details */}

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-blue-50 p-4 dark:bg-gray-800">
                  <h4 className="font-semibold text-blue-600">
                    Language
                  </h4>

                  <p className="mt-2 dark:text-white">
                    {course.language}
                  </p>
                </div>

                <div className="rounded-xl bg-green-50 p-4 dark:bg-gray-800">
                  <h4 className="font-semibold text-green-600">
                    Certificate
                  </h4>

                  <p className="mt-2 dark:text-white">
                    {course.certificate ? "Available" : "Not Available"}
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* What You'll Learn */}

          <div className="border-t border-gray-200 p-8 dark:border-gray-700">

            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              📚 What You'll Learn
            </h2>

            <div className="grid gap-4 md:grid-cols-2">

              <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                ✅ Build Real World Projects
              </div>

              <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                ✅ Understand Core Concepts
              </div>

              <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                ✅ Learn Industry Best Practices
              </div>

              <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                ✅ Become Job Ready
              </div>

            </div>

          </div>

          {/* Requirements */}

          <div className="border-t border-gray-200 p-8 dark:border-gray-700">

            <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
              📌 Requirements
            </h2>

            <ul className="list-disc space-y-3 pl-6 text-gray-700 dark:text-gray-300">

              <li>Basic Computer Knowledge</li>

              <li>No Prior Experience Required</li>

              <li>Internet Connection</li>

              <li>Learning Mindset 😊</li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CourseDetailsModal;