const fs = require("fs");
const path = require("path");

const LOG_FILE = path.join(__dirname, "../logs/sentEmails.json");

function saveStatus({
  company,
  email,
  status,
  reason = ""
}) {

  try {

    let records = [];

    if (fs.existsSync(LOG_FILE)) {

      const fileData = fs.readFileSync(LOG_FILE, "utf8");

      records = fileData ? JSON.parse(fileData) : [];

    }

    records.push({
      company,
      email,
      status,
      time: new Date().toISOString(),
      reason
    });

    fs.writeFileSync(
      LOG_FILE,
      JSON.stringify(records, null, 2)
    );

  } catch (error) {

    console.error("Unable to save email status.");

    console.error(error.message);

  }

}

module.exports = {
  saveStatus
};