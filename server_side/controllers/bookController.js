const Book = require("../models/bookModel");
const { getSumCompletion, getBookCover } = require("./openai-api-handler");
const { logRequest } = require("../logger/logger");

const getAllBooks = async (req, res) => {
  logRequest("POST-request", "/book/getAll", req.body);
  console.log(req.body);
  try {
    const books = await Book.find({ email: req.body.email });
    logRequest("POST-response", `/book/getAll`, books);
    res.status(200).send(books);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  logRequest("GET-request", `/book/${id}`, req.body);
  try {
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }

    logRequest("GET-response", `/book/${id}`, book);
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addBook = async (req, res) => {
  logRequest("POST-request", "/book/", req.body);
  const book = req.body;
  book.description = await getSumCompletion(book.bookName, book.pageNumber);
  book.imageUrl = await getBookCover(book.bookName);

  try {
    const bookSummary = await Book.create(book);
    logRequest("POST-response", `/book/`, bookSummary);
    res.status(200).send(bookSummary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBookById = async (req, res) => {
  const id = req.params.id;
  logRequest("PUT-request", `book/${id}`, req.body);
  try {
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }

    book.description = await getSumCompletion(
      book.bookName,
      req.body.pageNumber,
    );
    book.pageNumber = req.body.pageNumber;
    await Book.findByIdAndUpdate(id, book);
    const updatedBook = await Book.findById(id);
    logRequest("PUT-response", `book/${id}`, updatedBook);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBookById = async (req, res) => {
  const id = req.params.id;
  logRequest("DEL-request", `book/${id}`, req.body);
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }

    logRequest("DEL-response", `book/${id}`, book);
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
