import axios from "axios";

// Set the base URL for the backend API
const API_URL = "http://localhost:5000/api";

// Create an Axios instance with default settings
const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
});

// Attach Authorization header if token exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// ----------- Authentication APIs -----------
export const registerUser = async (userData) => {
    return api.post("/auth/register", userData);
};

export const loginUser = async (userData) => {
    return api.post("/auth/login", userData);
};

// ----------- Board APIs -----------
export const getBoards = async () => {
    return api.get("/boards");
};

export const createBoard = async (boardData) => {
    return api.post("/boards", boardData);
};

// ----------- Task APIs -----------
export const getTasks = async (boardId) => {
    return api.get(`/tasks/${boardId}`);
};

export const createTask = async (taskData) => {
    return api.post("/tasks", taskData);
};

export const updateTask = async (taskId, updatedData) => {
    return api.put(`/tasks/${taskId}`, updatedData);
};

export const deleteTask = async (taskId) => {
    return api.delete(`/tasks/${taskId}`);
};

export default api;
