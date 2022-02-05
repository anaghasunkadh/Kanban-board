const Task = require("../models/Task");

// Get all tasks for a specific board
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ board: req.params.boardId });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            status: req.body.status || "todo",
            board: req.body.boardId,
            assignedTo: req.body.assignedTo
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: "Invalid data" });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: "Update failed" });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.taskId);
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: "Deletion failed" });
    }
};
