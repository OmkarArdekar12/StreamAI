import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js"; // Assuming you've already set up auth
import { getChatMessagesByStream } from "../controllers/chatController.js";

const router = express.Router();

// Create a new chat message (not used directly in real-time, but can be used for testing)
router.get("/stream/:stream_id", authenticate, getChatMessagesByStream)
export default router;
