const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
});

// Prevent overwriting the model if it already exists
module.exports = mongoose.models.Board || mongoose.model("Board", BoardSchema);
