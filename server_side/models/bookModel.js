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

    email: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
