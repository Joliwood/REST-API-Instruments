import { Request, Response } from "express";

const notFoundHandler = (
  _: Request,
  res: Response
) => {
  return res.status(404).json({ error: "This URL doesn't exists, please check on the documentation" });
};

export { notFoundHandler }