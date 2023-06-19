const router = require("express").Router();
const listController = require("../../exemples/listController");
const tournamentController = require("../controllers/tournamentController");

router.get("/", (req, res) => {
  res.send("Hello from oKanban API");
});

//* LISTS
router.get("/lists", listController.getAll);
router.get("/lists/:id", listController.getOne);
router.post("/lists", listController.create);
router.patch("/lists/:id", listController.update);
router.delete("/lists/:id", listController.delete);

router.get("/tournaments", tournamentController.getAll);

//* CARDS

//* TAGS

module.exports = router;
