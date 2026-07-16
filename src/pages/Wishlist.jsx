import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  const removeCourse = (id) => {
    const updated = wishlist.filter((course) => course.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <h2 className="text-center text-2xl text-gray-500">
          No Courses Added
        </h2>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {wishlist.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold">
                  {course.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {course.description}
                </p>

                <div className="flex gap-3 mt-5">

                  <Link
                    to={`/course/${course.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => removeCourse(course.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;