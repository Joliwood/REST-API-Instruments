import { Tournament } from "../models";
import { Request, Response } from 'express';

const tournamentController = {

  async getAll(_: Request, res: Response): Promise<Object | undefined> {

    try {
      const tournament: Tournament[] = await Tournament.findAll({
        include: { all: true, nested: true },
      });
      return res.json(tournament);

    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return res.status(500).json({
          message: 'Erreur interne 500',
          error: error.message
        });
      }
    }
  },

  async getOne(req: Request, res: Response): Promise<Object | undefined> {
    const id: number = parseInt(req.params.id, 10);
    
    try {
      const tournament: Tournament | null = await Tournament.findByPk(id, {
        include: { all: true, nested: true },
      });

      if (!tournament) {
        return res
          .status(404)
          .json({ message: "Ce tournois n'existe pas" });
      }

      res.json(tournament);

    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return res.status(500).json({
          message: 'Erreur interne 500',
          error: error.message
        });
      }
    }

  }

  // create : We have to use req.body to get clubs we want to put in the tournament

  // update : We can update only if the tournament had been created in the last 5 minutes, we also can only add clubs to simplify the function

  // delete : Again, it is possible to delete a tournament only if it had been created in the last 5 minutes

};

export default tournamentController;
