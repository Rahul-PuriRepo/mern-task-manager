function AddTaskForm({
  title,
  setTitle,
  priority,
  setPriority,
  dueDate,
  setDueDate,
  addTask,
  darkMode,
}) {

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8">

      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`flex-1 rounded-xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 border ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-white"
            : "bg-white border-gray-300 text-black"
        }`}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className={`rounded-xl px-4 py-4 border ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-white"
            : "bg-white border-gray-300 text-black"
        }`}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className={`rounded-xl px-4 py-4 border ${
          darkMode
            ? "bg-gray-700 border-gray-600 text-white"
            : "bg-white border-gray-300 text-black"
        }`}
      />

      <button
        onClick={addTask}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
      >
        Add Task
      </button>

    </div>
  );
}

export default AddTaskForm;