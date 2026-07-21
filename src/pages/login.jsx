import { useState } from "react";
import {
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from =
    location.state?.from?.pathname || "/dashboard";

  const [email, setEmail] = useState(
    localStorage.getItem("rememberEmail") || ""
  );

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [remember, setRemember] = useState(
    !!localStorage.getItem("rememberEmail")
  );

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (!savedUser) {
      alert("Please Register First");
      navigate("/register");
      return;
    }

    if (
      email.trim().toLowerCase() ===
        savedUser.email.trim().toLowerCase() &&
      password === savedUser.password
    ) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      if (remember) {
        localStorage.setItem(
          "rememberEmail",
          email
        );
      } else {
        localStorage.removeItem(
          "rememberEmail"
        );
      }

      alert("Login Successful 🎉");

      navigate(from, {
        replace: true,
      });

    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">

      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-900 dark:text-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
          Login to continue your learning journey
        </p>

        {/* Email */}

        <div className="relative mb-5">

          <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
            required
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
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full pl-11 pr-12 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
            required
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-4 top-4 text-gray-500"
          >
            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </button>

        </div>

        {/* Remember */}

        <div className="flex justify-between items-center mb-6">

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              checked={remember}
              onChange={() =>
                setRemember(!remember)
              }
            />

            Remember Me

          </label>

          <button
            type="button"
            className="text-blue-600 hover:underline text-sm"
          >
            Forgot Password?
          </button>

        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition duration-300"
        >
          Login
        </button>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-300">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Login;