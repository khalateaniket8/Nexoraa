import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png.svg";

const HeroSection = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-900 transition-all duration-300 py-16 px-6 md:px-12">

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
            Welcome Back,
            <span className="text-blue-600"> Student!</span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-xl">
            Continue learning and achieve your goals with LearnSphere.
          </p>

          <Link
            to="/courses"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition"
          >
            Explore Courses
          </Link>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">

          <img
            src={heroImage}
            alt="Student Learning"
            className="w-full max-w-lg"
          />

        </div>

      </div>

    </section>
  );
};

export default HeroSection;