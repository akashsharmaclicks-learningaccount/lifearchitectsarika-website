import express from "express";
import cors from "cors";
import healthRouter from "./modules/health/health.routes";
import { notFoundMiddleware } from "./common/middlewares/not-found.middleware";
import { errorMiddleware } from "./common/middlewares/error.middleware";
import contactRouter from "./modules/contact/contact.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/health", healthRouter);
app.use("/api/v1/contact", contactRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
