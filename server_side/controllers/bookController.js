const Book = require("../models/bookModel");
const { OpenAI } = require("openai");
require("dotenv").config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const systemPromptCHAT = "You are a helpful assistant...";
const systemPromptSum = "You are book summarizer...";

const openAIClient = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const getSumCompletion = async () => {
  const chatCompletion = await openAIClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPromptSum },
      { role: "user", content: "Can you say hello to me?" },
    ],
  });

  return chatCompletion.choices[0].message.content;
};

const getChatCompletion = async () => {
  const chatCompletion = await openAIClient.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [
      { role: "system", content: systemPromptCHAT },
      { role: "user", content: "Can you say hello to me?" },
    ],
  });

  return chatCompletion.choices[0].message.content;
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({ userId: req.userId });
    res.status(200).send(books);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
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
  const book = req.body;
  book.description = await getSumCompletion();

  try {
    const bookSummary = await Book.create(book);
    res.status(200).send(bookSummary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBookById = async (req, res) => {
  const id = req.params.id;
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
