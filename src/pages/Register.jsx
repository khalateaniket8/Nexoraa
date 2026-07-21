import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !user.name ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user.email)) {
      alert("Enter a valid email.");
      return;
    }

    if (user.password.length < 6) {
      alert(
        "Password must contain at least 6 characters."
      );
      return;
    }

    if (
      user.password !== user.confirmPassword
    ) {
      alert("Passwords do not match.");
      return;
    }

    const saveUser = {
      name: user.name,
      email: user.email,
      password: user.password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(saveUser)
    );

    alert("Registration Successful 🎉");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">

      <form
        onSubmit={handleRegister}
        className="bg-white dark:bg-gray-900 dark:text-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Create Account
        </h1>

        {/* Name */}

        <div className="relative mb-5">

          <FaUser className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            className="w-full pl-11 pr-4 py-3 border rounded-lg outline-none focus:border-blue-600 dark:bg-gray-800 dark:border-gray-700"
          />

        </div>

        {/* Email */}

        <div className="relative mb-5">

          <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full pl-11 pr-4 py-3 border rounded-lg outline-none focus:border-blue-600 dark:bg-gray-800 dark:border-gray-700"
          />

        </div>

        {/* Password */}

        <div className="relative mb-5">

          <FaLock className="absolute left-4 top-4 text-gray-400" />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="w-full pl-11 pr-12 py-3 border rounded-lg outline-none focus:border-blue-600 dark:bg-gray-800 dark:border-gray-700"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-4 top-4"
          >
            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </button>

        </div>

        {/* Confirm Password */}

        <div className="relative mb-6">

          <FaLock className="absolute left-4 top-4 text-gray-400" />

          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
            className="w-full pl-11 pr-12 py-3 border rounded-lg outline-none focus:border-blue-600 dark:bg-gray-800 dark:border-gray-700"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-4 top-4"
          >
            {showConfirmPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </button>

        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
        >
          Register
        </button>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-300">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Register;