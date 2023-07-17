import sportsController from "../controllers/sportController";
import tournamentController from "../controllers/tournamentController";
import clubController from "../controllers/clubController";
import { Router, Request, Response } from "express";
import { handleErrors } from "../middlewares/errorMiddleware"
import { notFoundHandler } from "../middlewares/routeMiddleware";
const bodyParser = require('body-parser')

const router = Router();

router.use(bodyParser.json())
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

router.get("/", (_: Request, res: Response) => {
  res.send(
    "Hello from Tournaments API, check-out the readme.md on Github for more informations about all routes disponibles."
  );
});

router.get("/tournaments", tournamentController.getAll);
router.get("/tournament/:id", tournamentController.getOne);

router.get("/createtournament", tournamentController.createGet);
router.post("/createtournament", tournamentController.create);

router.delete("/deletetournament/:id", tournamentController.delete);

router.patch("/modifytournament/:id/:newname", tournamentController.modify);

router.get("/sports", sportsController.getAll);

router.get("/clubs", clubController.getAll);

router.use(handleErrors);
router.use(notFoundHandler);

export default router;
