function Navbar({
  darkMode,
  setDarkMode,
  logoutHandler,
  userInfo,
}) {

  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className={`text-5xl font-bold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}>
          Dashboard
        </h1>

        <p className={`mt-2 text-xl ${
          darkMode ? "text-gray-300" : "text-gray-500"
        }`}>
          Welcome {userInfo?.name}
        </p>
      </div>

      <div className="flex gap-3">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        <button
          onClick={logoutHandler}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;