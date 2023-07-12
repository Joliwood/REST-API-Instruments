import { Sport } from "../models";
import { Request, Response } from 'express';

const sportController = {
    async getAll(_: Request, res: Response): Promise<Object | undefined> {

        try {
            const sport: Sport[] = await Sport.findAll();
    
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

export default sportController;
