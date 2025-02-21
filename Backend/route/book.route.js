import express from "express";
import { getBook, addBook, updateBook, deleteBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/", addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;