function EditTaskModal({
  editingTask,
  editTitle,
  setEditTitle,
  updateTaskTitle,
  setEditingTask,
  darkMode,
}) {

  if (!editingTask) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className={`p-8 rounded-2xl w-full max-w-md ${
          darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }`}
      >

        <h2 className="text-3xl font-bold mb-6">
          Edit Task
        </h2>

        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className={`w-full rounded-xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500 border ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-black"
          }`}
        />

        <div className="flex gap-4 mt-6">
          <button
            onClick={updateTaskTitle}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Save
          </button>

          <button
            onClick={() => setEditingTask(null)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}

export default EditTaskModal;