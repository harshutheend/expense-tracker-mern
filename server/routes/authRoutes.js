import express from "express";
import {
  sendOTP,
  verifyOTP,
  forgotPassword,
  verifyResetOTP,
  resetPassword,
  loginUser,
} from "../controllers/authController.js";

const router = express.Router();

// Registration
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);

// Password Reset
router.post("/forgot-password", forgotPassword);
router.post("/verify-reset-otp", verifyResetOTP);
router.post("/reset-password", resetPassword);

// Login
router.post("/login", loginUser);

export default router;
