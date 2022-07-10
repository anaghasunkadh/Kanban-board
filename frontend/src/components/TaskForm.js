import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ boardId, onTaskAdded }) => {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("todo");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/tasks", {
                title,
                status,
                boardId,
            });

            onTaskAdded(response.data); // Update UI after successful task creation
            setTitle(""); // Clear form
            setStatus("todo");
        } catch (err) {
            console.error("Error adding task:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
