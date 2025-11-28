const fs = require("fs");

// Read file
// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("continue js");

// Write File
// writeFile method will rewrite the the blog.txt file with given messege(Hello, again2) and no such file exist it will create then write in it

// fs.writeFile("./docs/blog2.txt", "Hello, again2", () => {
//   console.log("file updated");
// });

// Directories
// create and remove folder
// if (!fs.existsSync("./asset")) {
//   fs.mkdir("./asset", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./asset", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder removed");
//   });
// }

// Deleting file
if (fs.existsSync("./docs/blog2.txt")) {
  fs.unlink("./docs/blog2.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
