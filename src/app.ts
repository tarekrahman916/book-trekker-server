import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// Application routes
app.use("/api/v1", router);

// Testing
app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome Book Trekker");
});

// Global error handler
app.use(globalErrorHandler);

// // Handle Not found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Api Not found",
      },
    ],
  });
  next();
});

export default app;
