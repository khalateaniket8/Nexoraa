import { Link } from "react-router-dom";
import { useState } from "react";

const CourseCard = ({ course }) => {
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">

      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {course.title}
        </h2>

        <p className="text-gray-600 mt-2">
          {course.description}
        </p>

        <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {course.category}
        </span>

        <div className="mt-4">

          <p className="mb-2">
            Progress : {course.progress}%
          </p>

          <div className="w-full bg-gray-300 rounded-full h-3">

            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{
                width: `${course.progress}%`,
              }}
            ></div>

          </div>

        </div>

        <div className="flex gap-3 mt-6">

          <Link
            to={`/course/${course.id}`}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            View
          </Link>

          <button
            onClick={addWishlist}
            className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600"
          >
            {liked ? "❤️ Added" : "🤍 Wishlist"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;