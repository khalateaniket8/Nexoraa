import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import DarkMode from "./DarkMode";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          Nexoraa
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-200">

          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/courses" className="hover:text-blue-600">
              Courses
            </Link>
          </li>

          <li>
            <Link to="/wishlist" className="hover:text-blue-600">
              Wishlist
            </Link>
          </li>

          <li>
            <Link to="/mylearning" className="hover:text-blue-600">
              My Learning
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/profile" className="hover:text-blue-600">
              Profile
            </Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          <FaSearch
            className="text-xl cursor-pointer hover:text-blue-600"
          />

          {/* Dark Mode */}
          <DarkMode />

          <Link to="/profile">
            <FaUserCircle
              className="text-3xl cursor-pointer hover:text-blue-600"
            />
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </Link>
          )}

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">

          <ul className="flex flex-col gap-4 p-5">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/courses" onClick={() => setMenuOpen(false)}>
              Courses
            </Link>

            <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
              Wishlist
            </Link>

            <Link to="/mylearning" onClick={() => setMenuOpen(false)}>
              My Learning
            </Link>

            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>

            <Link to="/profile" onClick={() => setMenuOpen(false)}>
              Profile
            </Link>

            <div className="pt-2">
              <DarkMode />
            </div>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 rounded-lg"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 text-white py-2 rounded-lg text-center"
              >
                Login
              </Link>
            )}

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;