// mock-server/merge.js
import fs from "fs";
import path from "path";


const dir = "./mock-server/DummyData";
const output = "./mock-server/db.json";

const files = fs.readdirSync(dir);
const data = {};

files.forEach(file => {
  if (file.endsWith(".json")) {
    const name = path.basename(file, ".json");
    data[name] = JSON.parse(fs.readFileSync(path.join(dir, file), "utf-8"));
  }
});

fs.writeFileSync(output, JSON.stringify(data, null, 2));
console.log("✅ Combined all dummy data into db.json");
