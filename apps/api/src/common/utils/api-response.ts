import { Response } from "express";

export const sendSuccessResponse = <T>(
  res: Response,
  message: string,
  data?: T,
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data: data ?? null,
  });
};

export const sendErrorResponse = (
  res: Response,
  message: string,
  errors: unknown = null,
  statusCode = 500
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};
