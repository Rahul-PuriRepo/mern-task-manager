import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://mern-task-manager-eybb.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("userInfo", JSON.stringify(data));

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Login
      </h1>

      <form onSubmit={submitHandler} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-gray-500">
        New user?{" "}
        <Link
          to="/register"
          className="text-blue-500 font-semibold"
        >
          Register
        </Link>
      </p>
    </div>
  </div>
);
}

export default Login;