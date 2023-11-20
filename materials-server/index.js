require("dotenv").config();
const express = require("express");
const loggerMiddleware = require("./middleware/logger");
const cors = require("cors");

const authRouter = require("./auth");
const materialsRouter = require("./materials");

const app = express();
const port = process.env.PORT;
const origin = process.env.ORIGIN;

app.use(cors({ origin }));
app.use(loggerMiddleware);
app.use(express.json());
app.use("/auth", authRouter);
app.use("/materials", materialsRouter);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
