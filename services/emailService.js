const nodemailer = require("nodemailer");
const config = require("../config/config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.EMAIL,
    pass: config.EMAIL_PASSWORD,
  },
});

async function sendEmail(to, subject, body) {
  try {
    const info = await transporter.sendMail({
      from: `"${config.APP_NAME}" <${config.EMAIL}>`,
      to,
      subject,
      text: body,
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    return {
      success: false,
      reason: error.message,
    };
  }
}

module.exports = {
  sendEmail,
};