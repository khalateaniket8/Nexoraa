import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png.svg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-16">

        {/* Left */}
        <div className="flex-1 text-center lg:text-left">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-5">
            🚀 Welcome to LearnSphere
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">

            Learn New
            <span className="text-blue-600">
              {" "}Skills
            </span>

            <br />

            Anytime Anywhere

          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">

            Learn programming, cloud computing,
            UI/UX, DevOps and much more with
            industry experts.

            Complete courses, earn certificates
            and build your career.

          </p>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">

            <Link
              to="/courses"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              Explore Courses
            </Link>

            <Link
              to="/dashboard"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Dashboard
            </Link>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>

              <h2 className="text-3xl font-bold text-blue-600">
                50+
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                Courses
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-green-600">
                10K+
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                Students
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-purple-600">
                98%
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                Success
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex-1 flex justify-center">

          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-xl hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </section>
  );
};

export default HeroSection;