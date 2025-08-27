import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import sessionConfig from "./config/session.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(sessionConfig);
app.use(express.static(path.join(__dirname, "public")));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", authRoutes);
app.use("/products", productRoutes);
app.use("/students", studentRoutes);

// Start server
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
