import { Tournament } from "../models";
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

  async create(req: Request, res: Response) {
    const { name, sport } = req.query;
    console.log("you are in the creation tournament processus")
    
    try {

      //! 1. Validation of datas
      if (!name) {
        return res
          .status(400)
          .json({ message: "You didn't fill in the name" });
      }
      if (typeof name !== "string") {
        return res
          .status(400)
          .json({ message: "Invalid type: name should be a string" });
      }

      //! 2. Creation of the ressource
      const newTournament = await Tournament.create({
        name: name,
        sport_id: sport,
      });

      //! 3. Client return
      // const tournament = await Tournament.findByPk
      return res.status(201).json(newTournament);

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

  async modify(req: Request, res: Response) {
    const id: number = parseInt(req.params.id, 10);
    const newName: string = req.params.newname;

    try {
      const tournament: Tournament | null | any = await Tournament.findByPk(id);
      const dateInSec = Date.now();
      const tournamentDateInSec = tournament.createdAt.getTime();
      const differenceInMinutes = Math.abs(Math.floor((tournamentDateInSec - dateInSec) / (1000 * 60)));
      
      //! 1. Validation of datas
      if (differenceInMinutes <= 5) {
        if (!tournament) {
          return res
            .status(404)
            .json({ message: "Tournament not found. Please verify the provided id" });
        }
        if (
          typeof newName !== "undefined" &&
          typeof newName !== "string"
        ) {
          return res.status(400).json({
            message: "Invalid body parameter 'newname'. Should provide a string.",
          });
        }
        if (id !== undefined && isNaN(id)) {
          return res.status(400).json({
            message:
              "Invalid body parameter 'id'. Should provide a number.",
          });
        }

        //! 2. Update of the ressource
        await tournament.update({
          name: newName
        });

        //! 3. Back to client
          return res.json(tournament);
      } else {
        return res.send("You cannot modify a tournament that was created more than 5 minutes ago.");
      } 
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

  async delete(req: Request, res: Response) {
    const id: number = parseInt(req.params.id, 10);
    
    try {
      const tournament: Tournament | null | any = await Tournament.findByPk(id);

      const dateInSec = Date.now();
      const tournamentDateInSec = tournament.createdAt.getTime();
      const differenceInMinutes = Math.abs(Math.floor((tournamentDateInSec - dateInSec) / (1000 * 60)));

      //! 1. Delete resource + check
      if (differenceInMinutes <= 5) {
        const suppressedList = await Tournament.destroy({
          where: {
            id: id,
          },
        });

        // The destroy method returns the number of rows deleted from the DB
        // If it returns 0, it has not found the list to delete ! => 404
        if (suppressedList === 0) {
          return res
            .status(404)
            .json({ message: "Tournament not found. Please verify the provided id" });
          }
          
        //! 2. Back to client
        return res.status(200).json({ message: `The tournament with the id of ${id} has been successfully deleted` });
        
      } else {
        return res.send("You cannot delete a tournament that was created more than 5 minutes ago.");
      } 

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

};

export default tournamentController;
