import { Tournament, Level } from "../models";
import { Request, Response } from 'express';

const tournamentController = {

  async getAll(_: Request, res: Response): Promise<Object | undefined> {

    try {
      const tournament: Tournament[] = await Tournament.findAll({
        include: { all: true, nested: true },
        // If we want a limitation
        // limit: 2
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

  },

  // create : We have to use req.body to get clubs we want to put in the tournament
  async create(req: Request, res: Response) {
    // const { levelName } = req.body;
    const levelName = req.query.name;
    console.log("you are in the creation tournament processus")
    
    try {

      //! 1. Validation of datas
      if (!levelName) {
        return res
          .status(400)
          .json({ message: "You didn't fill in the name" });
      }
      if (typeof levelName !== "string") {
        return res
          .status(400)
          .json({ message: "Invalid type: name should be a string" });
      }

      //! 2. Creation of the ressource
      const newLevel = await Level.create({
        name: levelName,
        // sport_id: 2,
      });

      //! 3. Client return
      // const tournament = await Tournament.findByPk
      return res.status(201).json(newLevel);

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

  async createGet(_: Request, res: Response) {
    
    try {
      
      res.send("To create a tournament, you have to send to the REST API an HTTP POST method");

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

  

  // update : We can update only if the tournament had been created in the last 5 minutes, we also can only add clubs to simplify the function

  // delete : Again, it is possible to delete a tournament only if it had been created in the last 5 minutes

};

export default tournamentController;
