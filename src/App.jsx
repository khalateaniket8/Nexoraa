import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import StatsCard from "./components/StatsCard";
import CourseGrid from "./components/CourseGrid";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import CourseDetailsModal from "./components/CourseDetailsModal";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyLearning from "./pages/MyLearning";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Wishlist from "./pages/Wishlist";
import Dashboard from "./pages/Dashboard";
import Certificate from "./pages/Certificate";
import Learning from "./pages/Learning";

import coursesData from "./data/courses";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      <HeroSection />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800 transition-all duration-300">
        <h2 className="text-4xl font-bold text-center mb-12">
          Learning Statistics
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCard
            icon="📚"
            number="12"
            title="Total Courses"
          />

          <StatsCard
            icon="✅"
            number="8"
            title="Completed Courses"
          />

          <StatsCard
            icon="⏳"
            number="3"
            title="In Progress"
          />

          <StatsCard
            icon="🏆"
            number="5"
            title="Certificates"
          />
        </div>
      </section>

      <CourseGrid
        courses={filteredCourses}
        onViewDetails={setSelectedCourse}
      />

      <CourseDetailsModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/course/:id"
          element={<CourseDetails />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mylearning"
          element={
            <ProtectedRoute>
              <MyLearning />
            </ProtectedRoute>
          }
        />

        <Route
          path="/learning/:id"
          element={
            <ProtectedRoute>
              <Learning />
            </ProtectedRoute>
          }
        />

        <Route
          path="/certificate/:courseName"
          element={
            <ProtectedRoute>
              <Certificate />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
