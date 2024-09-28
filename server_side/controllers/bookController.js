const Book = require("../models/bookModel");
const { getSumCompletion, getBookCover } = require("./openai-api-handler");
const { logRequest } = require("../logger/logger");

const getAllBooks = async (req, res) => {
  logRequest("GET", "/book/", req.body);
  try {
    const books = await Book.find({ userId: req.body.userId });
    res.status(200).send(books);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  logRequest("GET", `/book/${id}`, req.body);
  try {
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addBook = async (req, res) => {
  logRequest("POST", "/book/", req.body);
  const book = req.body;
  book.description = await getSumCompletion(book.bookName, book.pageNumber);
  book.imageUrl = await getBookCover(book.bookName);

  try {
    const bookSummary = await Book.create(book);
    res.status(200).send(bookSummary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBookById = async (req, res) => {
  const id = req.params.id;
  logRequest("PUT", `book/${id}`, req.body);
  try {
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }

    const updatedBook = await Book.findById(id);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBookById = async (req, res) => {
  const id = req.params.id;
  logRequest("DEL", `book/${id}`, req.body);
  try {
    const book = await Book.findByIdAndDelete(id, req.body);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
};
