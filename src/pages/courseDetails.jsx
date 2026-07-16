import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";

const CourseDetails = () => {
  const { id } = useParams();

  const course = courses.find((item) => item.id === Number(id));

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const savedReviews =
      JSON.parse(localStorage.getItem(`reviews_${id}`)) || [];

    setReviews(savedReviews);
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

  const handleEnroll = () => {
    let enrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    const alreadyEnrolled = enrolledCourses.find(
      (item) => item.id === course.id
    );

    if (alreadyEnrolled) {
      alert("You are already enrolled in this course.");
      return;
    }

    enrolledCourses.push(course);

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolledCourses)
    );

    alert("Course Enrolled Successfully!");
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
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-8">

          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">
            {course.category}
          </span>

          <h1 className="text-5xl font-bold mt-5">
            {course.title}
          </h1>

          <p className="text-gray-600 text-lg mt-5">
            {course.description}
          </p>

          <div className="mt-8 space-y-3">

            <p>
              <strong>Instructor:</strong> LearnSphere Team
            </p>

            <p>
              <strong>Duration:</strong> 8 Weeks
            </p>

            <p>
              <strong>Lessons:</strong> 24 Lessons
            </p>

            <p>
              <strong>Progress:</strong> {course.progress}%
            </p>

            <p>
              <strong>Category:</strong> {course.category}
            </p>

          </div>

          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={handleEnroll}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            >
              Enroll Now
            </button>

            <Link
              to={`/learning/${course.id}`}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
            >
              Start Learning
            </Link>

            <Link
              to={`/certificate/${course.title}`}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700"
            >
              Certificate
            </Link>

            <Link
              to="/courses"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50"
            >
              Back to Courses
            </Link>

          </div>

          <hr className="my-10" />

          <h2 className="text-3xl font-bold mb-6">
            Rate this Course
          </h2>
                    <div className="mb-6">

            <label className="block font-semibold mb-2">
              Select Rating
            </label>

            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full border rounded-lg p-3"
            >
              <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
              <option value={4}>⭐⭐⭐⭐ (4)</option>
              <option value={3}>⭐⭐⭐ (3)</option>
              <option value={2}>⭐⭐ (2)</option>
              <option value={1}>⭐ (1)</option>
            </select>

          </div>

          <div className="mb-6">

            <label className="block font-semibold mb-2">
              Write Your Review
            </label>

            <textarea
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review here..."
              className="w-full border rounded-lg p-4"
            ></textarea>

          </div>

          <button
            onClick={handleReview}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg"
          >
            Submit Review
          </button>

          <hr className="my-10" />

          <h2 className="text-3xl font-bold mb-6">
            Student Reviews
          </h2>

          {reviews.length === 0 ? (

            <div className="bg-gray-100 p-6 rounded-xl text-center">
              <p className="text-gray-500">
                No Reviews Yet. Be the first to review this course!
              </p>
            </div>

          ) : (

            <div className="space-y-5">

              {reviews.map((review, index) => (

                <div
                  key={index}
                  className="bg-gray-100 p-5 rounded-xl shadow"
                >

                  <h3 className="text-xl font-bold">
                    {review.name}
                  </h3>

                  <p className="text-yellow-500 text-lg mt-2">
                    {"⭐".repeat(review.rating)}
                  </p>

                  <p className="text-gray-700 mt-3">
                    {review.comment}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default CourseDetails;