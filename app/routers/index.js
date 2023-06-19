const router = require("express").Router();
const listController = require("../controllers/listController");

router.get("/", (req, res) => {
  res.send("Hello from oKanban API");
});

//* LISTS
router.get("/lists", listController.getAll);
router.get("/lists/:id", listController.getOne);
router.post("/lists", listController.create);
router.patch("/lists/:id", listController.update);
router.delete("/lists/:id", listController.delete);

//* CARDS

//* TAGS

module.exports = router;
