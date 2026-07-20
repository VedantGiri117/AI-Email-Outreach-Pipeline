require("dotenv").config();

module.exports = {
  // Application
  APP_NAME: "neoMax",

  // Dataset
  DATASET_PATH: "./data/practiceData.xlsx",

  // Email Settings
  EMAIL_SUBJECT:
    "Exploring a Potential Investment Opportunity with neoMax",

  // Gemini
  GEMINI_MODEL: "gemini-2.5-flash",

  // Testing
  TEST_MODE: false,

  // Leave empty to send to everyone
  TEST_EMAILS: [],

  // Leave empty to process all rows
  SEND_ONLY_ROWS: [],

  // Delay between emails (milliseconds)
  EMAIL_DELAY: 3000,

  // Environment Variables
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  EMAIL: process.env.EMAIL,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};