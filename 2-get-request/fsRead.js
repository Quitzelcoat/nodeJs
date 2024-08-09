// Reading File using if else.
/*
import fs from "node:fs";
fs.readFile("./testfile.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
*/

// using Sync Method
/*
import fs from "node:fs";
try {
  const data = fs.readFileSync("./testfile.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
*/

// Using Promises

import fs from "node:fs/promises";
try {
  const data = await fs.readFile("./testfile.txt", { encoding: "utf8" });
  console.log(data);
} catch (err) {
  console.log(err);
}
