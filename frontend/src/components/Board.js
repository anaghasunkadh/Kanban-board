import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const Board = ({ tasks, boardId }) => {
    const [taskList, setTaskList] = useState(tasks);

    const handleTaskAdded = (newTask) => {
        setTaskList([...taskList, newTask]);
    };

    return (
        <div className="board">
            <TaskForm boardId={boardId} onTaskAdded={handleTaskAdded} />
            {["todo", "in-progress", "done"].map((status) => (
                <div key={status} className="task-column">
                    <h3>{status.toUpperCase()}</h3>
                    {taskList.filter((task) => task.status === status).map((task) => (
                        <Task key={task._id} task={task} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
