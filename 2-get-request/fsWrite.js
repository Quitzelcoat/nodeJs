// Using  if else

/*
const fs = require("node:fs");
const content = "Some content!";
fs.writeFile("./testfile.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
*/

// Writing synchronoulsy

/*
const fs = require('node:fs');
const content = "Other content!";
try {
  fs.writeFileSync("./testfile.txt", content);
  // file written successfully
} catch (err) {
  console.error(err);
}
*/

// Using Promises

/*
const fs = require("node:fs/promises");
async function example() {
  try {
    const content = "Last content!";
    await fs.writeFile("./testfile.txt", content);
  } catch (err) {
    console.log(err);
  }
}
example();
*/

// To append new content by creating a new file if not created already.
// If it is created already then adding new content instead of removing it.

/*
const fs = require("node:fs");
const content = "Any content!";
fs.appendFile("file.log", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Done");
  }
});
*/

// Appending with Promises
const fs = require("node:fs/promises");
async function example() {
  try {
    const content = "Some content!";
    await fs.appendFile("./testfile.txt", content);
  } catch (err) {
    console.log(err);
  }
}
example();
