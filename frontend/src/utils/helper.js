// Convert a timestamp to a readable date format
export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

// Capitalize the first letter of a string
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Group tasks by status (todo, in-progress, done)
export const groupTasksByStatus = (tasks) => {
    return {
        todo: tasks.filter(task => task.status === "todo"),
        inProgress: tasks.filter(task => task.status === "in-progress"),
        done: tasks.filter(task => task.status === "done"),
    };
};

// Handle API errors and return user-friendly messages
export const handleApiError = (error) => {
    if (error.response) {
        console.error("API Error:", error.response.data);
        return error.response.data.message || "Something went wrong. Please try again.";
    } else {
        console.error("Network Error:", error.message);
        return "Network error. Please check your connection.";
    }
};
