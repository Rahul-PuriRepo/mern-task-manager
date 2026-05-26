function TaskCard({
  task,
  darkMode,
  toggleTask,
  deleteTask,
  setEditingTask,
  setEditTitle,
}) {
  return (
    <div
      className={`border rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:items-center md:justify-between gap-5 ${
        darkMode
          ? "bg-gray-700 border-gray-600"
          : "bg-white border-gray-200"
      }`}
    >
      <div>
        <h2
          className={`text-2xl font-semibold ${
            task.completed
              ? "line-through text-gray-400"
              : darkMode
              ? "text-white"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </h2>

        <p className={`mt-2 ${
          darkMode ? "text-gray-300" : "text-gray-500"
        }`}>
          {task.description}
        </p>

        <p className={`text-sm mt-2 ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}>
          Due: {
            task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : "No due date"
          }
        </p>

        <div className="flex gap-3 mt-4">
          <span
            className={`px-4 py-1 rounded-full text-sm text-white ${
              task.completed
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          >
            {task.completed
              ? "Completed"
              : "Pending"}
          </span>

          <span
            className={`px-4 py-1 rounded-full text-sm text-white ${
              task.priority === "high"
                ? "bg-red-500"
                : task.priority === "medium"
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">

        <button
          onClick={() => {
            setEditingTask(task);
            setEditTitle(task.title);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          Edit
        </button>

        <button
          onClick={() => toggleTask(task)}
          className={`px-5 py-3 rounded-xl text-white font-semibold transition ${
            task.completed
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(task._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskCard;