import { Request, Response, NextFunction } from "express";

export const timeOfRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = `Time of request is: ${Date.now()}`;

  const incomingRequest = {
    method: req.method,
    url: req.url,
    message,
  };

  console.info(incomingRequest);

  next();
};
