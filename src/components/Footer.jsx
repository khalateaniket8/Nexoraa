import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>

          <h2 className="text-3xl font-bold text-blue-500">
            LearnSphere
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Learn modern technologies like React,
            Tailwind CSS, JavaScript, Python,
            Cloud Computing and much more with
            industry experts.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                className="hover:text-blue-400 transition"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/wishlist"
                className="hover:text-blue-400 transition"
              >
                Wishlist
              </Link>
            </li>

            <li>
              <Link
                to="/profile"
                className="hover:text-blue-400 transition"
              >
                Profile
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">

            <p>📧 support@learnsphere.com</p>

            <p>📱 +91 9876543210</p>

            <p>📍 Pune, Maharashtra</p>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-500">

        © 2026 LearnSphere | Built with React + Tailwind CSS ❤️

      </div>

    </footer>
  );
};

export default Footer;