import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, html) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Expense Tracker <onboarding@resend.dev>",
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Resend Error:", error);
      throw new Error(error.message);
    }

    console.log("✅ Email sent:", data);
  } catch (error) {
    console.error("Email Error:", error);
    throw error;
  }
};

export default sendEmail;
