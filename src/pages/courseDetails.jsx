import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaStar,
  FaClock,
  FaBook,
  FaUserGraduate,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";

import courses from "../data/courses";

const CourseDetails = () => {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const savedReviews =
      JSON.parse(localStorage.getItem(`reviews_${id}`)) || [];

    setReviews(savedReviews);

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setLiked(
      wishlist.some((item) => item.id === Number(id))
    );
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold text-red-500">
          Course Not Found
        </h1>
      </div>
    );
  }

  const addWishlist = () => {
    let wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exist = wishlist.find(
      (item) => item.id === course.id
    );

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

  const shareCourse = async () => {
    if (navigator.share) {
      await navigator.share({
        title: course.title,
        text: course.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Course Link Copied");
    }
  };

  const handleEnroll = () => {
    let enrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    const alreadyEnrolled =
      enrolledCourses.find(
        (item) => item.id === course.id
      );

    if (alreadyEnrolled) {
      alert("You are already enrolled.");
      return;
    }

    enrolledCourses.push(course);

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolledCourses)
    );

    alert("Course Enrolled Successfully 🎉");
  };

  const handleReview = () => {
    if (comment.trim() === "") {
      alert("Please write a review.");
      return;
    }

    const user =
      JSON.parse(localStorage.getItem("user")) || {};

    const newReview = {
      name: user.name || "Student",
      rating,
      comment,
    };

    const updatedReviews = [...reviews, newReview];

    setReviews(updatedReviews);

    localStorage.setItem(
      `reviews_${id}`,
      JSON.stringify(updatedReviews)
    );

    setComment("");
    setRating(5);

    alert("Review Added Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white py-10 px-6">

      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[420px] object-cover"
        />

        <div className="p-8">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            {course.category}
          </span>

          <h1 className="text-5xl font-bold mt-5">
            {course.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-5 text-lg">
            {course.description}
          </p>
                    <div className="flex flex-wrap gap-8 mt-8 text-lg">

            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>4.8 Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <FaClock />
              <span>8 Weeks</span>
            </div>

            <div className="flex items-center gap-2">
              <FaBook />
              <span>24 Lessons</span>
            </div>

            <div className="flex items-center gap-2">
              <FaUserGraduate />
              <span>1250 Students</span>
            </div>

          </div>

          {/* Progress */}

          <div className="mt-8">

            <h3 className="font-bold mb-2">
              Course Progress
            </h3>

            <div className="w-full bg-gray-300 rounded-full h-4">

              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{
                  width: `${course.progress}%`,
                }}
              ></div>

            </div>

            <p className="mt-2 font-semibold">
              {course.progress}% Completed
            </p>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={handleEnroll}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
            >
              Enroll Now
            </button>

            <button
              onClick={addWishlist}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg flex items-center gap-2"
            >
              <FaHeart />

              {liked ? "Added" : "Wishlist"}

            </button>

            <button
              onClick={shareCourse}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg flex items-center gap-2"
            >
              <FaShareAlt />
              Share
            </button>

            <Link
              to={`/learning/${course.id}`}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
            >
              Start Learning
            </Link>

            <Link
              to={`/certificate/${course.title}`}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg"
            >
              Certificate
            </Link>

          </div>

          <hr className="my-12" />

          {/* What You'll Learn */}

          <h2 className="text-3xl font-bold mb-6">
            📚 What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-xl">
              ✅ Build Real World Projects
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-xl">
              ✅ React Components
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-xl">
              ✅ React Router DOM
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-xl">
              ✅ State Management
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-xl">
              ✅ Tailwind CSS
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-xl">
              ✅ Responsive Design
            </div>

          </div>

          <hr className="my-12" />
          {/* Instructor */}

<div className="bg-blue-50 dark:bg-gray-700 rounded-2xl p-8">

  <h2 className="text-3xl font-bold mb-6">
    👨‍🏫 Instructor
  </h2>

  <div className="flex flex-col md:flex-row items-center gap-6">

    <img
      src="https://i.pravatar.cc/150?img=12"
      alt="Instructor"
      className="w-28 h-28 rounded-full"
    />

    <div>

      <h3 className="text-2xl font-bold">
        LearnSphere Team
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mt-3">
        Experienced Full Stack Developers having
        expertise in React.js, JavaScript,
        Tailwind CSS, Node.js and Modern Web
        Development.
      </p>

    </div>

  </div>

</div>

<hr className="my-12" />

{/* Course Includes */}

<h2 className="text-3xl font-bold mb-6">
  📦 This Course Includes
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-blue-100 dark:bg-gray-700 rounded-xl p-6 text-center">

    <h3 className="text-5xl">🎥</h3>

    <p className="mt-4 font-semibold">
      24 HD Videos
    </p>

  </div>

  <div className="bg-green-100 dark:bg-gray-700 rounded-xl p-6 text-center">

    <h3 className="text-5xl">📄</h3>

    <p className="mt-4 font-semibold">
      Downloadable Notes
    </p>

  </div>

  <div className="bg-yellow-100 dark:bg-gray-700 rounded-xl p-6 text-center">

    <h3 className="text-5xl">💻</h3>

    <p className="mt-4 font-semibold">
      Live Projects
    </p>

  </div>

  <div className="bg-purple-100 dark:bg-gray-700 rounded-xl p-6 text-center">

    <h3 className="text-5xl">🏆</h3>

    <p className="mt-4 font-semibold">
      Completion Certificate
    </p>

  </div>

</div>

<hr className="my-12" />

{/* Requirements */}

<h2 className="text-3xl font-bold mb-6">
  📋 Requirements
</h2>

<ul className="space-y-4 list-disc ml-8 text-lg">

  <li>Basic Computer Knowledge</li>

  <li>No Programming Experience Required</li>

  <li>Internet Connection</li>

  <li>VS Code Installed</li>

  <li>Practice Every Day</li>

</ul>

<hr className="my-12" />

{/* Review */}

<h2 className="text-3xl font-bold mb-6">
  ⭐ Rate this Course
</h2>

<div className="mb-6">

  <select
    value={rating}
    onChange={(e) =>
      setRating(Number(e.target.value))
    }
    className="w-full border rounded-lg p-3"
  >

    <option value={5}>⭐⭐⭐⭐⭐</option>

    <option value={4}>⭐⭐⭐⭐</option>

    <option value={3}>⭐⭐⭐</option>

    <option value={2}>⭐⭐</option>

    <option value={1}>⭐</option>

  </select>

</div>

<textarea
  rows="4"
  value={comment}
  onChange={(e) =>
    setComment(e.target.value)
  }
  placeholder="Write your review..."
  className="w-full border rounded-lg p-4 mb-5 dark:bg-gray-700"
/>

<button
  onClick={handleReview}
  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg"
>
  Submit Review
</button>

<hr className="my-12" />

<h2 className="text-3xl font-bold mb-6">
  Student Reviews
</h2>
{reviews.length === 0 ? (

  <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl text-center">

    <p className="text-gray-500 dark:text-gray-300">
      No Reviews Yet. Be the first to review this course!
    </p>

  </div>

) : (

  <div className="space-y-5">

    {reviews.map((review, index) => (

      <div
        key={index}
        className="bg-gray-100 dark:bg-gray-700 p-5 rounded-xl shadow"
      >

        <h3 className="text-xl font-bold">
          {review.name}
        </h3>

        <p className="text-yellow-500 text-lg mt-2">
          {"⭐".repeat(review.rating)}
        </p>

        <p className="mt-3">
          {review.comment}
        </p>

      </div>

    ))}

  </div>

)}

<hr className="my-12" />

{/* Average Rating */}

<h2 className="text-3xl font-bold mb-6">
  ⭐ Average Rating
</h2>

<div className="bg-yellow-50 dark:bg-gray-700 rounded-xl p-6 mb-10">

  <h3 className="text-5xl font-bold text-yellow-500">

    {reviews.length === 0
      ? "5.0"
      : (
          reviews.reduce(
            (sum, item) => sum + item.rating,
            0
          ) / reviews.length
        ).toFixed(1)}

  </h3>

  <p className="mt-3">
    Based on {reviews.length} Reviews
  </p>

</div>

<hr className="my-12" />

{/* Related Courses */}

<h2 className="text-3xl font-bold mb-6">
  📚 Related Courses
</h2>

<div className="grid md:grid-cols-3 gap-6">

  {courses
    .filter(
      (item) =>
        item.category === course.category &&
        item.id !== course.id
    )
    .slice(0, 3)
    .map((item) => (

      <div
        key={item.id}
        className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
      >

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-5">

          <h3 className="text-xl font-bold">
            {item.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mt-3">
            {item.description}
          </p>

          <Link
            to={`/course/${item.id}`}
            className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            View Course
          </Link>

        </div>

      </div>

    ))}

</div>

<div className="flex flex-wrap justify-center gap-5 mt-12">

  <Link
    to="/courses"
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
  >
    Browse More Courses
  </Link>

  <Link
    to="/dashboard"
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
  >
    Go To Dashboard
  </Link>

</div>

      </div>

    </div>

  </div>
);

};

export default CourseDetails;
