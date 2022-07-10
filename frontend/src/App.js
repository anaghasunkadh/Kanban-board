import React from "react";
import { Routes, Route } from "react-router-dom";
import KanbanBoard from "./pages/KanbanBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import "./styles/global.css";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<KanbanBoard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
