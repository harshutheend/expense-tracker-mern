# 💰 Expense Tracker MERN

A modern full-stack Expense Tracker built with the **MERN Stack** featuring secure JWT authentication, Email OTP verification, password reset via email, interactive dashboard, expense analytics, and CSV export.

## 🚀 Live Demo

### 🌐 Frontend
https://expense-tracker-mern-woad.vercel.app

### ⚙️ Backend API
https://expense-tracker-mern-068l.onrender.com

> **Note:** The backend is hosted on Render. If the app takes a few seconds to load on first use, the server may be waking up from sleep.

---

# ✨ Features

## 🔐 Authentication

- Email OTP Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Forgot Password
- Password Reset using Email OTP
- Password Hashing (bcrypt)

---

## 💳 Expense Management

- Add Expense
- Edit Expense
- Delete Expense
- View All Expenses
- Category-wise Expenses
- Search Expenses

---

## 📊 Dashboard

- Total Expenses
- Expense Analytics
- Charts & Graphs
- Category Breakdown

---

## 📁 Export

- Export expenses as CSV

---

## 📧 Email Services

- Registration Email Verification
- Forgot Password OTP
- Secure Email Delivery using Nodemailer

---

# 🛠 Tech Stack

## Frontend

- React
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast
- Recharts

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Nodemailer

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# 📂 Project Structure

```
expense-tracker-mern
│
├── client
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── services
│   │   └── ...
│   │
│   └── public
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── ...
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/harshutheend/expense-tracker-mern.git
```

---

## Install Frontend

```bash
cd client
npm install
npm run dev
```

---

## Install Backend

```bash
cd server
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Server (.env)

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

EMAIL_USER=YOUR_GMAIL

EMAIL_PASS=YOUR_GMAIL_APP_PASSWORD
```

---

## Client (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

For production:

```env
VITE_API_URL=https://expense-tracker-mern-068l.onrender.com/api
```

---

# 🔒 Authentication Flow

## Registration

```
Register
     ↓
Send Email OTP
     ↓
Verify OTP
     ↓
Account Created
     ↓
Dashboard
```

---

## Password Reset

```
Forgot Password
        ↓
Enter Email
        ↓
Receive OTP
        ↓
Verify OTP
        ↓
Create New Password
        ↓
Login
```

---

# 🚀 Upcoming Features

- Monthly Budget Planning
- Recurring Expenses
- Dark Mode
- Profile Management
- Income Tracking
- Expense Categories with Icons
- Monthly Reports (PDF)
- Google Login
- Email Notifications

---

# 👨‍💻 Author

**Harsh Sinha**

GitHub:
https://github.com/harshutheend

LinkedIn:
(Add your LinkedIn URL here)

---

# ⭐ Support

If you found this project helpful,

⭐ Star the repository on GitHub!

It really helps and motivates future improvements.
