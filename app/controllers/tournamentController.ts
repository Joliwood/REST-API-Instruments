import { Tournament } from "../models";
import { Request, Response } from 'express';

const tournamentController = {
  async getAll(_: Request, res: Response): Promise<void> {

    try {
      const tournament: Tournament[] = await Tournament.findAll({
        include: { all: true, nested: true },
      });

      res.json(tournament);

    } catch (error) {

      console.error(error);

      if (error instanceof Error) {
        res.status(500).json({
          message: 'Erreur interne 500',
          error: error.message
        });
      }
    }
  },

  async getOne(req: Request, res: Response): Promise<void> {

    const id: string = req.params.id;

    try {

      const tournament = await Tournament.findByPk(id, {
        include: { all: true, nested: true },
      });
      res.json(tournament);

    } catch (error) {

      console.error(error);

      if (error instanceof Error) {
        res.status(500).json({
          message: 'Erreur interne 500',
          error: error.message
        });
      }
    }
  }
};

export default tournamentController;
