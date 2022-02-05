const express = require("express");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all tasks for a board
router.get("/:boardId", verifyToken, getTasks);

// Create a new task
router.post("/", verifyToken, createTask);

// Update a task
router.put("/:taskId", verifyToken, updateTask);

// Delete a task
router.delete("/:taskId", verifyToken, deleteTask);

module.exports = router;
