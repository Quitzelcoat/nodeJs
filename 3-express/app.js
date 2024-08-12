const express = require("express");
const userRouter = require("<path-to-user-routes>");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  // You can of course also create your own for your own use-case!
  // Just make sure to call `next`
  next();
});

app.use("/users", userRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`)
);
