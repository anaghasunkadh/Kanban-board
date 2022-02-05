const Board = require("../models/Board");

// Get all boards for the authenticated user
exports.getBoards = async (req, res) => {
    try {
        const boards = await Board.find({ createdBy: req.user.userId });
        res.json(boards);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// Create a new board
exports.createBoard = async (req, res) => {
    try {
        const newBoard = new Board({
            name: req.body.name,
            createdBy: req.user.userId
        });
        await newBoard.save();
        res.status(201).json(newBoard);
    } catch (err) {
        res.status(400).json({ error: "Invalid data" });
    }
};
