import React, { useState, useEffect } from "react";
import { useWebSocket } from "../hooks/useWebSocket";
import axios from "axios";
import Board from "../components/Board";

const KanbanBoard = () => {
    const [tasks, setTasks] = useState([]);

    useWebSocket((updatedBoard) => {
        setTasks(updatedBoard.tasks);
    });

    useEffect(() => {
        axios.get("http://localhost:5000/api/tasks/boardId").then((res) => setTasks(res.data));
    }, []);

    return (
        <div>
            <h1>Kanban Board</h1>
            <Board tasks={tasks} />
        </div>
    );
};

export default KanbanBoard;
