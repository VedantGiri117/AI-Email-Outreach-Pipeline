const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require("../config/config");

const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: config.GEMINI_MODEL
});

async function generateEmail(companyData) {

  try {

    const prompt = `
You are writing a professional funding outreach email.

Startup Name:
${config.APP_NAME}

Company:
${companyData.company}

Industry:
${companyData.industry}

Description:
${companyData.description}

Instructions:

Write a short professional email.

Keep it below 90 words.

Mention the company naturally.

Explain that neoMax is building an AI-powered home visualization platform.

Politely express interest in discussing a potential investment opportunity.

Do not use buzzwords.

Do not sound like AI.

Return only the email body.
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    return response.text().trim();

  } catch (error) {

    console.error("Gemini Error:", error.message);

    return null;

  }

}

module.exports = {
  generateEmail
};