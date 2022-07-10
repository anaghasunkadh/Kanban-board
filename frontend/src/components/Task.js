import React from "react";

const Task = ({ task }) => {
    return (
        <div className="task-card">
            <h4>{task.title}</h4>
        </div>
    );
};

export default Task;
