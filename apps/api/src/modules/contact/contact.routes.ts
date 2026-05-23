import { Router } from "express";
import { createContactInquiryController } from "./contact.controller";

const contactRouter = Router();

contactRouter.post("/", createContactInquiryController);

export default contactRouter;