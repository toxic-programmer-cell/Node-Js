const express = require("express");

let app = express();

//register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// 404 page
app.use((req, res) => {
  res.render("404");
});
debugger;
//listen for request
app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is running on port 4000");
});
