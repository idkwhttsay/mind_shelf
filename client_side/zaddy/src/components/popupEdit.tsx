import { Book } from "../data/book";
import "../scss/popupEdit.scss";
import { useState } from "react";
import axios from "axios";
import loading_gif from "../imgs/loading.gif";
import Markdown from "react-markdown";

export function PopupEdit(props: {
  book: Book;
  setBook: (book: Book | null) => void;
}) {
  const [pageNumber, setPageNumber] = useState(props.book.pageNumber);
  const [description, setDescription] = useState(props.book.description);
  const [loading, setLoading] = useState(false);

  async function editPage() {
    setLoading(true);
    await axios
      .put(`https://mind-shelf.co:3012/book/${props.book._id}`, {
        pageNumber: pageNumber,
      })
      .then((response) => {
        setDescription(response.data.description);
        setPageNumber(response.data.pageNumber);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="dark" onClick={() => props.setBook(null)} />
      <div className="edit-box">
        <form className="edit-form">
          <label>
            <b>Edit your page number:</b>
          </label>
          <input
            value={pageNumber}
            onChange={(input) =>
              setPageNumber(Number.parseInt(input.target.value))
            }
            type="number"
            min={0}
          />
          <button
            type="button"
            className="edit-btn"
            onClick={() => {
              editPage();
            }}
          >
            Save
          </button>
          {loading && (
            <img
              className="loading-img"
              alt="Loading"
              src={loading_gif}
              width={25}
              height={25}
            />
          )}
        </form>
        <div className="description">
          {!loading ? <Markdown>{description}</Markdown> : <p>Loading...</p>}
        </div>
      </div>
    </>
  );
}
