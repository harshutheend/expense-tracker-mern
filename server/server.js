import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Expense Tracker API is running 🚀",
  });
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });
