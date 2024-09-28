const Book = require("../models/bookModel");
const { OpenAI } = require("openai");
require("dotenv").config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const LOGGER_COLOR = process.env.LOGGER_COLOR;

const systemPromptSum = `You are a helpful book expert. You have read every book on the internet and can provide detailed summaries of any book. The following messages will be from people visiting a book summarizer site for specific page numbers/ chapters.`;

const openAIClient = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const logRequest = (method, url, data) => {
  console.log(`${LOGGER_COLOR}[${method}] ${url}\x1b[0m`, data || "");
};

const getSumCompletion = async (bookName, pageNumber) => {
  const chatCompletion = await openAIClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPromptSum },
      {
        role: "user",
        content: `I have been reading the book ${bookName} up to page ${pageNumber} and i have been busy so i have not been able to continue reading in a while. I feel i have forgotten all the little intricacies of the story. can you give me a summary so that I can continue reading from that page without missing anything and feel immersed in the story once again?. can you include sub points like ,a main overview, and key events leading up to the page. can you leave out any comments like "sure here\'s your summary" or "let me know if you need any clarifications? can you also make sure it\'s at least 500 words long?`,
      },
    ],
  });

  return chatCompletion.choices[0].message.content;
};

const getAllBooks = async (req, res) => {
  logRequest("GET", "/book/", req.body);
  try {
    const books = await Book.find({ userId: req.body.userId });
    if (!books) {
      res
        .status(404)
        .json({
          message: `User ${req.body.userId} doesn't exist or no books for User ${req.body.userId}`,
        });
    }
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
