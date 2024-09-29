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
bookRouter.post("/getAll", getAllBooks);

module.exports = bookRouter;
