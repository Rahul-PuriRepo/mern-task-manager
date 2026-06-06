import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
  "https://mern-task-manager-eybb.onrender.com/api/auth/register",
  formData
);

      localStorage.setItem(
  "userInfo",
  JSON.stringify(res.data)
);

      navigate("/dashboard");
    } catch (error) {
  console.log(error);

  alert(
    error.response?.data?.message ||
    "Registration Failed"
  );
}
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-10">
          Register
        </h1>

        <form onSubmit={onSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white text-xl font-semibold py-4 rounded-xl transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-lg">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;