const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("lodash");
  });

  greet();

  res.setHeader("content-type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      path += "about-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "error.html";
      res.statusCode = 404;
      break;
  }

  //   Send Html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    // res.write(data);

    res.end(data);
  });
});

server.listen(5000, "localhost", () => {
  console.log("server is running on port 5000");
});
