const express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  res.sendFile("./views/error.html", { root: __dirname });
});

//listen for request
app.listen(4000, () => {
  console.log("server is running on port 4000");
});
