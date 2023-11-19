const express = require("express");
const dotenv = require("dotenv");
const loggerMiddleware = require("./middleware/logger");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(loggerMiddleware);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
