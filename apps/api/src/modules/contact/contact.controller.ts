import { Request, Response, NextFunction } from "express";
import { sendSuccessResponse } from "../../common/utils/api-response";
import { createContactInquiry } from "./contact.service";
import { createContactInquirySchema } from "./contact.validation";

export const createContactInquiryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedData = createContactInquirySchema.parse(req.body);

    const inquiry = await createContactInquiry(validatedData);

    return sendSuccessResponse(
      res,
      "Contact inquiry submitted successfully",
      inquiry,
      201
    );
  } catch (error) {
    next(error);
  }
};