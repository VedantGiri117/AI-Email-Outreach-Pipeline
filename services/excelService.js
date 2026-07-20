const XLSX = require("xlsx");
const validator = require("validator");
const path = require("path");

function normalizeKey(key) {
  return String(key).trim().toLowerCase();
}

function findColumn(headers, possibleNames) {
  return headers.find(header =>
    possibleNames.includes(normalizeKey(header))
  );
}

function readDataset(filePath) {
  try {
    const workbook = XLSX.readFile(path.resolve(filePath));

    const sheetName = workbook.SheetNames[0];

    const sheet = workbook.Sheets[sheetName];

    const rows = XLSX.utils.sheet_to_json(sheet, {
      defval: "",
      raw: false
    });

    if (rows.length === 0) {
      throw new Error("Dataset is empty.");
    }

    const headers = Object.keys(rows[0]);

    const companyColumn = findColumn(headers, [
      "company",
      "company name",
      "organization",
      "investor"
    ]);

    const emailColumn = findColumn(headers, [
      "email",
      "email address",
      "contact email"
    ]);

    const industryColumn = findColumn(headers, [
      "industry",
      "sector",
      "type"
    ]);

    const descriptionColumn = findColumn(headers, [
      "description",
      "about",
      "notes"
    ]);

    if (!emailColumn) {
      throw new Error("Email column not found.");
    }

    const seenEmails = new Set();

    const validRows = [];

    rows.forEach((row, index) => {

      const email = String(row[emailColumn]).trim();

      if (!email) {
        console.log(`Skipping Row ${index + 2}: Email Missing`);
        return;
      }

      if (!validator.isEmail(email)) {
        console.log(`Skipping Row ${index + 2}: Invalid Email`);
        return;
      }

      if (seenEmails.has(email.toLowerCase())) {
        console.log(`Skipping Row ${index + 2}: Duplicate Email`);
        return;
      }

      seenEmails.add(email.toLowerCase());

      validRows.push({
        company: companyColumn ? row[companyColumn] : "Unknown Company",
        email,
        industry: industryColumn ? row[industryColumn] : "",
        description: descriptionColumn ? row[descriptionColumn] : ""
      });

    });

    console.log(`\nDataset Loaded Successfully`);
    console.log(`Total Valid Records: ${validRows.length}\n`);

    return validRows;

  } catch (error) {

    console.error("Error Reading Dataset:");

    console.error(error.message);

    process.exit(1);

  }
}

module.exports = {
  readDataset
};