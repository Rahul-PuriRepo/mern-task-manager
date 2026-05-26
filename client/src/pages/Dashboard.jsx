import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTaskById,
} from "../services/taskService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import TaskCard from "../components/TaskCard";
import EditTaskModal from "../components/EditTaskModal";
import AddTaskForm from "../components/AddTaskForm";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import TaskFilters from "../components/TaskFilters";

function Dashboard() {
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
      return;
    }

    fetchTasks();
  }, []);

  const fetchTasks = async () => {
  try {
    setLoading(true);

    const data = await getTasks(userInfo.token);

    setTasks(data);

  } catch (error) {
    console.log(error);
    toast.error("Failed to load tasks");
  } finally {
    setLoading(false);
  }
};

  const addTask = async () => {
    if (!title.trim()) {
      toast.error("Please enter a task");
      return;
    }

    try {
      await createTask({
        title,
        description: "My task description",
        priority,
        dueDate,
    },
    userInfo.token
    );

      setTitle("");
      setPriority("medium");
      setDueDate("");

      toast.success("Task Added");

      fetchTasks();
    } catch (error) {
      console.log(error);
      toast.error("Failed to add task");
    }
  };

  const toggleTask = async (task) => {
    try {
      await updateTask(task._id, {completed: !task.completed,}, userInfo.token);

      toast.success("Task Updated");

      fetchTasks();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskById(id, userInfo.token);

      toast.success("Task Deleted");

      fetchTasks();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete task");
    }
  };

  const updateTaskTitle = async () => {
    try {
      await updateTask(editingTask._id,{title: editTitle,
        completed: editingTask.completed,
        },
        userInfo.token
    );

      toast.success("Task Edited");

      setEditingTask(null);

      fetchTasks();

    } catch (error) {
      console.log(error);
      toast.error("Failed to edit task");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");

    toast.success("Logged out");

    navigate("/login");
  };

  const filteredTasks = tasks.filter((task) => {

    if (filter === "completed" && !task.completed) {
      return false;
    }

    if (filter === "pending" && task.completed) {
      return false;
    }

    return task.title
      .toLowerCase()
      .includes(search.toLowerCase());

  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-700">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-8 transition duration-300 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gray-100"
      }`}
    >
      <div
        className={`p-10 rounded-2xl shadow-xl w-full max-w-5xl mx-auto transition duration-300 ${
          darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }`}
      >

        <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            logoutHandler={logoutHandler}
            userInfo={userInfo}
        />

        <AddTaskForm
            title={title}
            setTitle={setTitle}
            priority={priority}
            setPriority={setPriority}
            dueDate={dueDate}
            setDueDate={setDueDate}
            addTask={addTask}
            darkMode={darkMode}
        />

        <TaskFilters
            filter={filter}
            setFilter={setFilter}
        />

        <SearchBar
            search={search}
            setSearch={setSearch}
            darkMode={darkMode}
        />

        <div className="mt-8 space-y-4">
          {filteredTasks.length === 0 ? (
            <p className={`text-center text-xl py-10 ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}>
              No Tasks Found
            </p>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                darkMode={darkMode}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                setEditingTask={setEditingTask}
                setEditTitle={setEditTitle}
              />
            ))
          )}
        </div>

        <EditTaskModal
            editingTask={editingTask}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            updateTaskTitle={updateTaskTitle}
            setEditingTask={setEditingTask}
            darkMode={darkMode}
        />

      </div>
    </div>
  );
}

export default Dashboard;