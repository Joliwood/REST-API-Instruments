import { Sport } from "../models";
import { Request, Response } from 'express';

const sportsController = {
    async getAll(_: Request, res: Response): Promise<void> {

        try {
            const sport: Sport[] = await Sport.findAll();
    
            res.header('Content-Type', 'application/json');
            res.json(sport);
            
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
};

export default sportsController;
