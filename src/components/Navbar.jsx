import { useEffect, useState } from "react";
import NotificationButton from "./NotificationButton";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleSearchClick = () => {
    console.log("Search clicked");
    // agar aap chaho to yahan search modal / input open karne ka state set karo
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
    window.location.href = "/profile";
    // ya agar router use kar rahe ho to navigate("/profile")
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold text-blue-600">Nexoraa</div>
            <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-700 dark:text-gray-200">
              <a href="/" className="hover:text-blue-600 dark:hover:text-white">Home</a>
              <a href="/courses" className="hover:text-blue-600 dark:hover:text-white">Courses</a>
              <a href="/wishlist" className="hover:text-blue-600 dark:hover:text-white">Wishlist</a>
              <a href="/learning" className="hover:text-blue-600 dark:hover:text-white">My Learning</a>
              <a href="/dashboard" className="hover:text-blue-600 dark:hover:text-white">Dashboard</a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                theme === "light"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Light
            </button>

            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                theme === "dark"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Dark
            </button>

            <button
              type="button"
              onClick={handleSearchClick}
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open search"
            >
              🔍
            </button>

            <NotificationButton />

            <button
              type="button"
              onClick={handleProfileClick}
              className="h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open profile"
            >
              👤
            </button>

            <button
              type="button"
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;