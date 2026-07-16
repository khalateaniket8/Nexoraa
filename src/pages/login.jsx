import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // LocalStorage se user nikalo
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // Agar user register nahi hai
    if (!savedUser) {
      alert("Please Register First");
      navigate("/register");
      return;
    }

    // Email aur Password check
    if (
      email.trim().toLowerCase() ===
        savedUser.email.trim().toLowerCase() &&
      password.trim() === savedUser.password.trim()
    ) {
      // Login Success
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful");

      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl rounded-xl p-8 w-96"
      >
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-600"
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6 focus:outline-none focus:border-blue-600"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-center mt-5 text-gray-600">
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