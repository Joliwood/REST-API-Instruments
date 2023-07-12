import { Club } from "../models";
import { Request, Response } from 'express';

const clubController = {
    async getAll(_: Request, res: Response): Promise<Object | undefined> {

        try {
            const sport: Club[] = await Club.findAll({
                include: { all: true, nested: true },
              });
    
            res.header('Content-Type', 'application/json');
            return res.json(sport);
            
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

export default clubController;
