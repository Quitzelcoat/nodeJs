const express = require("express");

const app = express();

function middleware1(req, res, next) {
  console.log("He's a middleware 1");
  next();
}

function errorHandler(err, req, res, next) {
  if (err) {
    res.send("<h1> There was an error, please try again</h1>");
  }
}

app.use(middleware1);

app.get("/", (req, res, next) => {
  console.log("This is a standard Express function");
  res.send("<h1>Hello World</h1>");
});

app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
