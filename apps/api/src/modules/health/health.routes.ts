import { Router } from "express";
import { sendSuccessResponse } from "../../common/utils/api-response";

const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  return sendSuccessResponse(res, "API is running successfully", {
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default healthRouter;
