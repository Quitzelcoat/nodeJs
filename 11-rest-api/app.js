const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();

const { users, messages } = require("./models/index");
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", routes.user);
app.use("/session", routes.session);
app.use("/messages", routes.message);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
