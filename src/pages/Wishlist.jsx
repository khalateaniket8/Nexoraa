import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(data);
  }, []);

  const removeCourse = (id) => {
    const updated = wishlist.filter(
      (course) => course.id !== id
    );

    setWishlist(updated);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center dark:text-white">
          ❤️ My Wishlist
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-3 mb-10">
          Save your favourite courses and enroll anytime.
        </p>

        {wishlist.length === 0 ? (

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center">

            <h2 className="text-3xl font-bold dark:text-white">
              Your Wishlist is Empty
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
              Browse courses and add the ones you like.
            </p>

            <Link
              to="/courses"
              className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Browse Courses
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {wishlist.map((course) => (

              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold dark:text-white">
                    {course.title}
                  </h2>

                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {course.description}
                  </p>

                  <div className="flex justify-between mt-5">

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {course.category}
                    </span>

                    <span className="font-bold text-yellow-500">
                      ⭐ {course.rating || 4.8}
                    </span>

                  </div>

                  <div className="mt-6">

                    <div className="flex justify-between mb-2 dark:text-white">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>

                    <div className="w-full bg-gray-300 rounded-full h-3">

                      <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{
                          width: `${course.progress}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                  <div className="mt-6 text-sm space-y-2 dark:text-gray-300">

                    <p>
                      👨‍🏫 <strong>Instructor:</strong>{" "}
                      {course.instructor || "John Doe"}
                    </p>

                    <p>
                      ⏳ <strong>Duration:</strong>{" "}
                      {course.duration || "8 Weeks"}
                    </p>

                    <p>
                      📚 <strong>Lessons:</strong>{" "}
                      {course.lessons || 40}
                    </p>

                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-8">

                    <Link
                      to={`/course/${course.id}`}
                      className="bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => removeCourse(course.id)}
                      className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
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

    </div>
  );
};

export default Wishlist;