import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.post("/", BookController.createBook);
router.get("/", BookController.getAllBook);

router.get("/:id", BookController.getSingleBook);
router.patch("/:id", BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

router.post("/reviews/:id", BookController.createReview);

export const BookRoutes = router;
