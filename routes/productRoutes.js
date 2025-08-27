import express from "express";
import { showProducts, addProduct } from "../controllers/productController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthenticated, showProducts);
router.post("/add", isAuthenticated, addProduct);

export default router;