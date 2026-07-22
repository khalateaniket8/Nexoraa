import { useState } from "react";
import ProfileImageUploader from "../components/ProfileImageUploader";

import {
  Mail,
  Phone,
  MapPin,
  Download,
  Award,
  BookOpen,
  Heart,
  Star,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    fullName: "Aniket Khalate",
    email: "khalateaniket8@gmail.com",
    phone: "9876543210",
    skills: "React, Node.js, Tailwind CSS, JavaScript, Git & GitHub",
    location: "Pune, Maharashtra",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 dark:bg-gray-900">

      <div className="mx-auto max-w-6xl px-6">

        {/* Hero Section */}

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-800">

          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 text-center">

            <ProfileImageUploader className="mx-auto mb-6" />

            <h1 className="text-4xl font-bold text-white">
              {profile.fullName}
            </h1>

            <p className="mt-3 text-lg text-blue-100">
              Full Stack Developer
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white">

              <div className="flex items-center gap-2">

                <Mail size={18} />

                <span>{profile.email}</span>

              </div>

              <div className="flex items-center gap-2">

                <Phone size={18} />

                <span>{profile.phone}</span>

              </div>

              <div className="flex items-center gap-2">

                <MapPin size={18} />

                <span>{profile.location}</span>

              </div>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">

            <BookOpen
              size={40}
              className="text-blue-600"
            />

            <h2 className="mt-4 text-3xl font-bold dark:text-white">
              12
            </h2>

            <p className="mt-2 text-gray-500">
              Courses Completed
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">

            <Award
              size={40}
              className="text-yellow-500"
            />

            <h2 className="mt-4 text-3xl font-bold dark:text-white">
              5
            </h2>

            <p className="mt-2 text-gray-500">
              Certificates
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">

            <Heart
              size={40}
              className="text-pink-600"
            />

            <h2 className="mt-4 text-3xl font-bold dark:text-white">
              8
            </h2>

            <p className="mt-2 text-gray-500">
              Wishlist
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">

            <Star
              size={40}
              className="text-green-600"
            />

            <h2 className="mt-4 text-3xl font-bold dark:text-white">
              4.9
            </h2>

            <p className="mt-2 text-gray-500">
              Average Rating
            </p>

          </div>

        </div>

        {/* Profile Form */}

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">

          <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Profile Information
          </h2>

          <p className="mb-8 text-gray-500 dark:text-gray-300">
            Update your profile details and showcase your professional information.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
                      {/* Full Name */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-200">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-200">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Phone */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-200">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Location */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-200">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Skills */}

            <div className="md:col-span-2">
              <label className="mb-2 block font-semibold text-gray-700 dark:text-gray-200">
                Skills
              </label>

              <textarea
                rows="4"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

          </div>

          {/* Skills Preview */}

          <div className="mt-10">

            <h2 className="mb-5 text-2xl font-bold dark:text-white">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {profile.skills.split(",").map((skill, index) => (

                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                >
                  {skill.trim()}
                </span>

              ))}

            </div>

          </div>

          {/* Social Links */}

          <div className="mt-10">

            <h2 className="mb-5 text-2xl font-bold dark:text-white">
              Connect With Me
            </h2>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <button
                className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                <Download size={20} />
                Download Resume
              </button>

            </div>

          </div>

          {/* Save Button */}

          <div className="mt-10">

            <button
              className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Save Profile
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfilePage;