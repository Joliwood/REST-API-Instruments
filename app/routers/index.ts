import sportsController from "../controllers/sportsController";
import tournamentController from "../controllers/tournamentController";
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(
    "Hello from Tournaments API, check-out the readme.md on Github for more informations about all routes disponibles."
  );
});

router.get("/tournaments", tournamentController.getAll);

router.get("/tournament/:id", tournamentController.getOne);

router.get("/sports", sportsController.getAll);

export default router;
