const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, enum: ["todo", "in-progress", "done"], default: "todo" },
    board: { type: mongoose.Schema.Types.ObjectId, ref: "Board" },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Task", TaskSchema);
