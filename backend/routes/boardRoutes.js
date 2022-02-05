const express = require("express");
const { getBoards, createBoard } = require("../controllers/boardController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/", verifyToken, getBoards);
router.post("/", verifyToken, createBoard);

module.exports = router;
