import { Link } from "react-router-dom";
import { FaUsers, FaBookOpen, FaAward, FaSearch } from "react-icons/fa";
import heroImage from "../assets/hero.png.svg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
            🚀 India's Modern Learning Platform
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">

            Learn Skills

            <span className="text-blue-600">
              {" "}That Build
            </span>

            <br />

            Your Future

          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">

            Master React, Node.js, Python, Java, UI/UX,
            Cloud Computing and Full Stack Development
            with industry experts.

            Build projects, earn certificates and become
            job ready.

          </p>

          {/* Search */}

          <div className="mt-8 flex bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">

            <div className="flex items-center px-4">
              <FaSearch className="text-gray-500" />
            </div>

            <input
              type="text"
              placeholder="Search your favourite course..."
              className="flex-1 p-4 outline-none bg-transparent"
            />

            <button className="bg-blue-600 px-6 text-white hover:bg-blue-700 transition">
              Search
            </button>

          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              to="/courses"
              className="bg-blue-600 text-white px-7 py-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              Explore Courses
            </Link>

            <Link
              to="/dashboard"
              className="border-2 border-blue-600 text-blue-600 px-7 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition"
            >
              Dashboard
            </Link>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 text-center">

              <FaBookOpen className="mx-auto text-blue-600 text-3xl mb-3"/>

              <h2 className="text-3xl font-bold">50+</h2>

              <p className="text-gray-500">
                Courses
              </p>

            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 text-center">

              <FaUsers className="mx-auto text-green-600 text-3xl mb-3"/>

              <h2 className="text-3xl font-bold">10K+</h2>

              <p className="text-gray-500">
                Students
              </p>

            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 text-center">

              <FaAward className="mx-auto text-purple-600 text-3xl mb-3"/>

              <h2 className="text-3xl font-bold">
                98%
              </h2>

              <p className="text-gray-500">
                Success
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src={heroImage}
            alt="LearnSphere Hero"
            className="w-full max-w-xl hover:scale-105 duration-500"
          />

        </div>

      </div>

    </section>
  );
};

export default HeroSection;