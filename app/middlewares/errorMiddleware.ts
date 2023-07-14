import { Request, Response, NextFunction } from 'express';

const handleErrors = (err: any, _: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({ error: "Internal Server Error" });
  next();
};
  
export { handleErrors };