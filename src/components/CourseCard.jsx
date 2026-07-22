import { useState } from "react";
import {
  Heart,
  Clock3,
  Star,
  Users,
  IndianRupee,
} from "lucide-react";

const CourseCard = ({ course, onViewDetails }) => {
  const [liked, setLiked] = useState(false);

  const addWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exist = wishlist.find((item) => item.id === course.id);

    if (exist) {
      alert("Course already exists in wishlist.");
      return;
    }

    wishlist.push(course);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    setLiked(true);

    alert("Course added to Wishlist ❤️");
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={course.image}
          alt={course.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
          {course.category}
        </span>

      </div>

      {/* Content */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {course.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-gray-600 dark:text-gray-300">
          {course.description}
        </p>

        {/* Details */}

        <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">

          <div className="flex items-center gap-1">
            <Clock3 size={16} />
            {course.duration || "8 Weeks"}
          </div>

          <div className="flex items-center gap-1">
            <Users size={16} />
            {course.students || "1200+"}
          </div>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            {course.rating || "4.8"}
          </div>

        </div>

        {/* Price */}

        <div className="mt-5 flex items-center gap-2">

          <IndianRupee
            size={20}
            className="text-green-600"
          />

          <span className="text-2xl font-bold text-green-600">
            {course.price || "999"}
          </span>

        </div>

        {/* Progress */}

        <div className="mt-6">

          <div className="mb-2 flex justify-between">

            <span className="font-medium dark:text-white">
              Progress
            </span>

            <span className="font-semibold text-blue-600">
              {course.progress}%
            </span>

          </div>

          <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700">

            <div
              className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700"
              style={{
                width: `${course.progress}%`,
              }}
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-7 flex gap-3">

          <button
            onClick={() => onViewDetails(course)}
            className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View Details
          </button>

          <button
            onClick={addWishlist}
            className={`rounded-xl px-4 transition ${
              liked
                ? "bg-red-500 text-white"
                : "bg-gray-100 hover:bg-red-500 hover:text-white dark:bg-gray-800"
            }`}
          >
            <Heart
              size={22}
              fill={liked ? "white" : "none"}
            />
          </button>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;