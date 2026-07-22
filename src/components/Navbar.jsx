import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Moon,
  Sun,
  User,
  Menu,
  X,
} from "lucide-react";
import NotificationButton from "./NotificationButton";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-lg shadow-sm dark:bg-gray-900/90 dark:border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600"
        >
          LearnSphere
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="hover:text-blue-600 transition"
          >
            Courses
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-blue-600 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/wishlist"
            className="hover:text-blue-600 transition"
          >
            Wishlist
          </Link>

          <Link
            to="/learning"
            className="hover:text-blue-600 transition"
          >
            My Learning
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}

          <div className="hidden lg:flex items-center rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-700">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search courses..."
              className="ml-2 w-48 bg-transparent outline-none"
            />

          </div>

          {/* Dark Mode */}

          <button
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          {/* Notification */}

          <NotificationButton />

          {/* Profile */}

          <Link
            to="/profile"
            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <User size={20} />
          </Link>

          {/* Logout */}

          <button
            className="hidden md:block rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition"
          >
            Logout
          </button>

          {/* Mobile Menu */}

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t bg-white dark:bg-gray-900 md:hidden">

          <Link
            to="/"
            className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Courses
          </Link>

          <Link
            to="/dashboard"
            className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Dashboard
          </Link>

          <Link
            to="/wishlist"
            className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Wishlist
          </Link>

          <Link
            to="/learning"
            className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            My Learning
          </Link>

          <Link
            to="/profile"
            className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Profile
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;