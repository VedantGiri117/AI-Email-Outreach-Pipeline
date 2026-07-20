const config = require("./config/config");
const { readDataset } = require("./services/excelService");
const { generateEmail } = require("./services/geminiService");
const { sendEmail } = require("./services/emailService");
const { saveStatus } = require("./services/statusService");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startPipeline() {
  console.log("\n========================================");
  console.log(`🚀 ${config.APP_NAME} AI Email Outreach Pipeline`);
  console.log("========================================\n");

  // Read Dataset
  const companies = readDataset(config.DATASET_PATH);

  if (!companies || companies.length === 0) {
    console.log("❌ No valid records found.");
    return;
  }

  console.log(`📄 Total Companies Found: ${companies.length}\n`);

  for (let i = 0; i < companies.length; i++) {
    const company = companies[i];

    console.log("----------------------------------------");
    console.log(`(${i + 1}/${companies.length}) ${company.company}`);
    console.log("----------------------------------------");

    try {
      console.log("✍️  Generating Email...");

      const emailBody = await generateEmail(company);

      if (!emailBody) {
        console.log("❌ Failed to generate email.");

        saveStatus({
          company: company.company,
          email: company.email,
          status: "Failed",
          reason: "Gemini generation failed"
        });

        continue;
      }

      console.log("📨 Sending Email...");

      const result = await sendEmail(
        company.email,
        config.EMAIL_SUBJECT,
        emailBody
      );

      if (result.success) {
        console.log("✅ Email Sent Successfully");

        saveStatus({
          company: company.company,
          email: company.email,
          status: "Sent"
        });
      } else {
        console.log("❌ Email Failed");

        saveStatus({
          company: company.company,
          email: company.email,
          status: "Failed",
          reason: result.reason
        });

        console.log(result.reason);
      }

      console.log(
        `⏳ Waiting ${config.EMAIL_DELAY / 1000} seconds...\n`
      );

      await delay(config.EMAIL_DELAY);

    } catch (error) {
      console.log("❌ Unexpected Error");

      console.log(error.message);

      saveStatus({
        company: company.company,
        email: company.email,
        status: "Failed",
        reason: error.message
      });
    }
  }

  console.log("\n========================================");
  console.log("🎉 Pipeline Completed Successfully");
  console.log("========================================\n");
}

startPipeline();