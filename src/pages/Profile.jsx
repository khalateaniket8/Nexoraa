import { useState } from "react";
import ProfileImageUploader from "../components/ProfileImageUploader";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    fullName: "Aniket Khalate",
    email: "khalateaniket8@gmail.com",
    phone: "9876543210",
    skills: "React, Node, Tailwind",
    location: "Mumbai, India",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-800">
        <div className="bg-blue-600 px-6 py-12 text-center">
          <ProfileImageUploader className="mx-auto mb-6" />
          <h1 className="text-3xl font-semibold text-white">{profile.fullName}</h1>
          <p className="mt-2 text-sm text-blue-100">{profile.email}</p>
        </div>

        <div className="px-6 py-8 sm:p-10">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Profile Details
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Update your personal details and change your profile picture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Full Name
              </span>
              <input
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-white p-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </span>
              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-white p-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Phone
              </span>
              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-white p-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Skills
              </span>
              <input
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-white p-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Location
              </span>
              <input
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-white p-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </label>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-[0.98]"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;