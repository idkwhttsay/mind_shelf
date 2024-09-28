const express = require("express");
const {
  addBook,
  deleteBookById,
  updateBookById,
  getBookById,
  getAllBooks,
} = require("../controllers/bookController");

const bookRouter = express.Router();

bookRouter.post("/", addBook);
bookRouter.delete("/:id", deleteBookById);
bookRouter.put("/:id", updateBookById);
bookRouter.get("/:id", getBookById);
bookRouter.get("/", getAllBooks);

module.exports = bookRouter;
