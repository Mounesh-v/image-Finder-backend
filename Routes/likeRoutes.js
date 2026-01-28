import express from "express";
import { getUserLikes, toggleLike } from "../Controller/likeController.js";
import protect from "../MiddleWare/authMiddleware.js";

const router = express.Router();

router.post("/toggle", protect, toggleLike);
router.get("/likes", protect, getUserLikes);

export default router;
