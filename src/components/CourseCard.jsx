import { useState } from "react";

const CourseCard = ({ course, onViewDetails }) => {
  const [liked, setLiked] = useState(false);

  const addWishlist = () => {
    let wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exist = wishlist.find((item) => item.id === course.id);

    if (exist) {
      alert("Already Added To Wishlist");
      return;
    }

    wishlist.push(course);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    setLiked(true);

    alert("Added To Wishlist ❤️");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      {/* Course Content */}
      <div className="p-5">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {course.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
          {course.description}
        </p>

        {/* Category */}
        <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {course.category}
        </span>

        {/* Progress */}
        <div className="mt-5">

          <div className="flex justify-between mb-2">

            <span className="font-medium dark:text-white">
              Progress
            </span>

            <span className="font-semibold text-blue-600">
              {course.progress}%
            </span>

          </div>

          <div className="w-full bg-gray-300 rounded-full h-3">

            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${course.progress}%`,
              }}
            ></div>

          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">

          <button
            onClick={() => onViewDetails(course)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 active:scale-95 transition"
          >
            View Details
          </button>

          <button
            onClick={addWishlist}
            className="flex-1 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 active:scale-95 transition"
          >
            {liked ? "❤️ Added" : "🤍 Wishlist"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;