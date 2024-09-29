import React, { useEffect, useState } from "react";
import axios from "axios";
import "../scss/home.scss";
import { PopupAdd } from "./popupAdd";
import { PopupEdit } from "./popupEdit";
import { Book } from "../data/book";

export function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<Book | null>(null);

  useEffect(() => {
    axios
      .post("http://localhost:3012/book/getAll", {
        email: "johndoe@example.com",
      })
      .then((response) => {
        if (response.status == 200) return response.data;
      })
      .then((objs) => {
        setBooks(objs);
      });
  }, [books]);

  return (
    <div className="box">
      {(books.length && (
        <>
          <div className="book-box">
            {books.map((book) => (
              <div onClick={() => setEditing(book)}>
                <h2>{book.bookName}</h2>
                <p>Your last page number is: {book.pageNumber}</p>
                <p>
                  Last updated at:{" "}
                  {new Date(book.updatedAt).toLocaleDateString()}
                </p>
                {/*<a>Last updated at: {book.updatedAt}</a>*/}
              </div>
            ))}
            <div className="plus">
              <button onClick={() => setAdding(true)}>+</button>
            </div>
          </div>
        </>
      )) || <></>}
      {adding && (
        <PopupAdd setAdding={setAdding} email={"johndoe@example.com"} />
      )}
      {editing && <PopupEdit book={editing} setBook={setEditing} />}
    </div>
  );
}
