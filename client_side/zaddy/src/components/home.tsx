import React, { useEffect, useState } from "react";
import axios from "axios";
import "../scss/home.scss";
import { PopupAdd } from "./popupAdd";
import { PopupEdit } from "./popupEdit";
import { Book } from "../data/book";
import cancel from "../imgs/cancel.png";

export function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<Book | null>(null);

  let email = window.localStorage.getItem("email") ?? "";

  useEffect(() => {
    axios
      .post("http://localhost:3012/book/getAll", {
        email: email,
      })
      .then((response) => {
        if (response.status === 200) return response.data;
      })
      .then((objs) => {
        setBooks(objs);
      });
  }, [books]);

  if (email == "") {
    window.location.replace("/");
    return <></>;
  }

  return (
    <div className="box">
      <>
        <div className="book-box">
          {books.map((book) => (
            <div className="book-item" onClick={() => setEditing(book)}>
              <button className="delete">
                <img src={cancel} width={30} />
              </button>
              <h2>{book.bookName}</h2>
              <p>Your last page number is: {book.pageNumber}</p>
              <p>
                Last updated at: {new Date(book.updatedAt).toLocaleDateString()}
              </p>
              {/*<a>Last updated at: {book.updatedAt}</a>*/}
            </div>
          ))}
          <div className="plus" onClick={() => setAdding(true)}>
            <button>+</button>
          </div>
        </div>
      </>
      {adding && <PopupAdd setAdding={setAdding} email={email} />}
      {editing && <PopupEdit book={editing} setBook={setEditing} />}
    </div>
  );
}
