function TaskFilters({
  filter,
  setFilter,
}) {

  return (
    <div className="flex gap-3 mt-6">

      <button
        onClick={() => setFilter("all")}
        className={`px-5 py-2 rounded-xl text-white font-medium transition ${
          filter === "all"
            ? "bg-gray-800"
            : "bg-gray-500 hover:bg-gray-600"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-5 py-2 rounded-xl text-white font-medium transition ${
          filter === "pending"
            ? "bg-yellow-600"
            : "bg-yellow-500 hover:bg-yellow-600"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-5 py-2 rounded-xl text-white font-medium transition ${
          filter === "completed"
            ? "bg-green-700"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        Completed
      </button>

    </div>
  );
}

export default TaskFilters;