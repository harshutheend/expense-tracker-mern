import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getDashboard,
} from "../controllers/expenseController.js";
const router = express.Router();

router.post("/", protect, addExpense);
router.get("/", protect, getExpenses);
router.get("/dashboard", protect, getDashboard);
router.put("/:id", protect, updateExpense);
router.delete("/:id", protect, deleteExpense);
export default router;
