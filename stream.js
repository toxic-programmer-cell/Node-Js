const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");
// readStream.on("error", (err) => {
//   console.log("ERROR:", err.message);
// });
// fs.unlink("./docs/blog4.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file deleted");
// });
readStream.on("data", (chunk) => {
  console.log(chunk.toString());
  console.log("-------NEW CHUNK-------");
  writeStream.write("\n NEW CHUNK \n");
  writeStream.write(chunk);
});
