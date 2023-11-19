const { Router } = require("express");

const authRouter = Router();

authRouter.post("/sign-in", (req, res) => {
  res.json({
    email: "test@user.com",
    id: 0,
  });
});

authRouter.post("/sign-up", (req, res) => {
  res.json({
    email: "test@user.com",
    id: 0,
  });
});

authRouter.post("/sign-out", (req, res) => {
  res.sendStatus(200);
});

authRouter.get("/me", (req, res) => {
  res.json({
    email: "test@user.com",
    id: 0,
  });
});

module.exports = authRouter;
