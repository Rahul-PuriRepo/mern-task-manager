const asyncHandler = require("express-async-handler");
const Task = require("../models/Task");


// CREATE TASK
const createTask = asyncHandler(async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;

  const task = await Task.create({
    title,
    description,
    status,
    priority,
    dueDate,
    user: req.user._id,
  });

  res.status(201).json(task);
});


// GET ALL TASKS
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({
    user: req.user._id,
  }).sort({ createdAt: -1 });

  res.status(200).json(tasks);
});


// UPDATE TASK
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  // NEW

  task.title =
    req.body.title || task.title;

  task.completed =
    req.body.completed ?? task.completed;

  const updatedTask = await task.save();

  res.status(200).json(updatedTask);
});


// DELETE TASK
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  await task.deleteOne();

  res.status(200).json({
    message: "Task removed",
  });
});


module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};