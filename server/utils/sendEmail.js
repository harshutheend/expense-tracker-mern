import * as brevo from "@getbrevo/brevo";
import dotenv from "dotenv";

dotenv.config();
console.log("BREVO_API_KEY exists:", !!process.env.BREVO_API_KEY);
console.log("SENDER_EMAIL:", process.env.SENDER_EMAIL);

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY,
);

const sendEmail = async (to, subject, html) => {
  try {
    const email = new brevo.SendSmtpEmail();

    email.sender = {
      name: "Expense Tracker",
      email: process.env.SENDER_EMAIL,
    };

    email.to = [{ email: to }];

    email.subject = subject;
    email.htmlContent = html;

    const result = await apiInstance.sendTransacEmail(email);

    console.log("✅ Email sent", result.body);
  } catch (error) {
    console.error("❌ Brevo API Error:", error);
    throw error;
  }
};

export default sendEmail;
