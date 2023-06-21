import { Tournament } from "../models";

const tournamentController = {
  async getAll(req: any, res: any) {
    try {
      const tournament = await Tournament.findAll({
        include: { all: true, nested: true },
      });

      res.json(tournament);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        console.log(error.stack);
      }
      res.status(500).send("Il y a une erreur 500 !");
    }
  },
};

export default tournamentController;
