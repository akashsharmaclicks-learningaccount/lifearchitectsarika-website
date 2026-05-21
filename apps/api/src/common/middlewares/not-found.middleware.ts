import { Request, Response } from "express";
import { sendErrorResponse } from "../utils/api-response";

export const notFoundMiddleware = (req: Request, res: Response) => {
  return sendErrorResponse(res, `Route not found: ${req.originalUrl}`, null, 404);
};
