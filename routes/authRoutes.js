
import express from "express";
import { showLogin, login, logout } from "../controllers/authController.js";

const router = express.Router();

router.get("/", showLogin);
router.post("/login", login);
router.get("/logout", logout);

export default router;