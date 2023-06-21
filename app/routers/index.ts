import tournamentController from "../controllers/tournamentController";
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello from oKanban API");
});

router.get("/tournaments", tournamentController.getAll);

export default router;
