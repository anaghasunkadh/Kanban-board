let io;

exports.setupWebSocket = (serverIo) => {
    io = serverIo;
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        // Handle when a task is updated
        socket.on("taskUpdated", (data) => {
            io.emit("updateBoard", data); // Broadcast update to all clients
        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
};

// Function to emit updates externally
exports.emitTaskUpdate = (data) => {
    if (io) {
        io.emit("updateBoard", data);
    }
};
