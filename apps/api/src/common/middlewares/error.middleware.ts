import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { sendErrorResponse } from "../utils/api-response";

export const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  if (err instanceof ZodError) {
    const formattedErrors = err.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));

    return sendErrorResponse(res, "Validation failed", formattedErrors, 400);
  }

  return sendErrorResponse(res, "Internal server error", null, 500);
};
