const { Router } = require("express");

const materialsRouter = Router();

materialsRouter.get("/", (req, res) => {
  res.json([
    {
      title: "Test title Test title Test title Test title Test title",
      id: 0,
      author_id: 0,
      body: "Material's body",
      color: "#aabbcc",
    },
  ]);
});

materialsRouter.get("/:id", (req, res) => {
  res.json({
    title: "Test title",
    id: req.params.id,
    author_id: 0,
    body: "Material's body",
    color: "#aabbcc",
  });
});

materialsRouter.post("/", (req, res) => {
  res.json(req.body);
});

materialsRouter.put("/:id", (req, res) => {
  res.json(req.body);
});

materialsRouter.delete("/:id", (req, res) => {
  res.sendStatus(200);
});

module.exports = materialsRouter;
