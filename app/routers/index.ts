const tournamentController = require("../controllers/tournamentController");

export const router = require("express").Router();

router.get("/", (req: any, res: any) => {
  res.send("Hello from oKanban API");
});

router.get("/tournaments", tournamentController.getAll);

module.exports = router;
