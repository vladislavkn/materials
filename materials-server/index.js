const express = require("express");
const dotenv = require("dotenv");
const loggerMiddleware = require("./middleware/logger");

dotenv.config();

const authRouter = require("./auth");

const app = express();
const port = process.env.PORT;

app.use(loggerMiddleware);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use(authRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
