const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    pageNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
