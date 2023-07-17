const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf-8",
  (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data.toString());
    }
  }
);

console.log("first");

fs.writeFile(
  path.join(__dirname, "files", "starter.txt"),
  "This is Vinayak",
  (err, data) => {
    if (err) throw err;
    else console.log(data.toString());
  }
);

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});
