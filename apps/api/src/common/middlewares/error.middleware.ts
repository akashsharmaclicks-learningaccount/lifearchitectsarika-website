import { NextFunction, Request, Response } from "express";
import { sendErrorResponse } from "../utils/api-response";

export const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  return sendErrorResponse(res, "Internal server error", null, 500);
};
