<div align="center">

# 📧 AI Email Outreach Pipeline

### AI-Powered Personalized Email Automation using Google Gemini

Generate personalized outreach emails from Excel datasets using **Google Gemini AI** and automatically send them through **Nodemailer**.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?style=for-the-badge&logo=google)
![Nodemailer](https://img.shields.io/badge/Nodemailer-0F9D58?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

</div>

---

# 🚀 Overview

The **AI Email Outreach Pipeline** automates personalized email outreach by leveraging Google's Gemini AI.

Instead of manually writing emails for every investor or client, this application:

- Reads company information from an Excel file.
- Generates personalized emails using Google Gemini.
- Sends emails automatically through Gmail.
- Tracks delivery status.
- Prevents duplicate emails.
- Validates email addresses before sending.

---

# ✨ Features

- 📄 Read Excel (.xlsx) and CSV files
- 🤖 AI-generated personalized emails
- 📧 Automatic email sending using Nodemailer
- ✅ Email validation
- 🔄 Duplicate email removal
- 📊 Delivery status logging
- ⚡ Configurable sending delay
- 🔒 Environment variable support
- 🏗 Modular service-based architecture

---

# 🛠 Tech Stack

| Technology | Usage |
|------------|------|
| Node.js | Backend Runtime |
| Google Gemini API | AI Email Generation |
| Nodemailer | Email Delivery |
| XLSX | Excel Processing |
| Validator | Email Validation |
| Dotenv | Environment Variables |

---

# 📂 Project Structure

```text
AI-Email-Outreach-Pipeline
│
├── config/
│   └── config.js
│
├── data/
│   └── companies.xlsx
│
├── logs/
│   └── sentEmails.json
│
├── services/
│   ├── excelService.js
│   ├── geminiService.js
│   ├── emailService.js
│   └── statusService.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/VedantGiri117/AI-Email-Outreach-Pipeline.git
```

Move into the project

```bash
cd AI-Email-Outreach-Pipeline
```

Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

EMAIL=YOUR_GMAIL

EMAIL_PASSWORD=YOUR_GMAIL_APP_PASSWORD
```

> Use a **Google App Password**, not your Gmail password.

---

# 📊 Dataset Format

| Company | Email | Industry | Description |
|----------|-------|----------|-------------|
| OpenAI | info@example.com | Artificial Intelligence | AI Research Company |
| Google | contact@example.com | Technology | Cloud Computing |

---

# ▶️ Running the Project

```bash
npm start
```

or

```bash
node index.js
```

---

# 🔄 Workflow

```text
Excel Dataset
      │
      ▼
Read Company Details
      │
      ▼
Validate Email
      │
      ▼
Generate Personalized Email
      │
      ▼
Send Email
      │
      ▼
Save Status
```

---

# 📬 Sample Output

### Terminal

```text
Dataset Loaded Successfully
Total Valid Records: 1

Generating Email...
Sending Email...

Email Sent Successfully

Pipeline Completed Successfully
```

---

# 📧 Sample Generated Email

The application generates personalized outreach emails using Google Gemini AI.

**Subject**

```
Exploring a Potential Investment Opportunity with neoMax
```

**Example**

```
Dear Investor,

I hope you are doing well.

My name is Vedant Giri, founder of neoMax.

We are building an AI-powered platform that helps users visualize and redesign their homes before making renovation decisions.

I believe our vision aligns with your investment interests and would love the opportunity to discuss how neoMax can create value.

Looking forward to hearing from you.

Best Regards,
Vedant Giri
Founder, neoMax
```

---

# 📈 Future Improvements

- HTML Email Templates
- Dashboard
- MongoDB / PostgreSQL Integration
- Email Scheduling
- Retry Mechanism
- Analytics
- Docker Support
- REST API
- Attachment Support

---

# 🤝 Contributing

```bash
git checkout -b feature/new-feature
git commit -m "Add new feature"
git push origin feature/new-feature
```

Then create a Pull Request.

---

# 👨‍💻 Author

## Vedant Giri

GitHub: **https://github.com/VedantGiri117**

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
