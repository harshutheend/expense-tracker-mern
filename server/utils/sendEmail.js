import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (to, subject, html) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Expense Tracker",
          email: process.env.SENDER_EMAIL,
        },
        to: [
          {
            email: to,
          },
        ],
        subject,
        htmlContent: html,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      },
    );

    console.log("✅ Email sent:", response.data);
  } catch (error) {
    console.error("❌ Brevo API Error:", error.response?.data || error.message);
    throw error;
  }
};

export default sendEmail;
