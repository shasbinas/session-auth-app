import express from "express";
import { showStudents } from "../controllers/studentController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthenticated, showStudents);

export default router;
