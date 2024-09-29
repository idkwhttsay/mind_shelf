import "../scss/popupAdd.scss";
import { useState } from "react";
import axios from "axios";
import loading_gif from "../imgs/loading.gif";

export function PopupAdd(props: {
  setAdding: (adding: boolean) => void;
  email: string;
}) {
  const [bookName, setBookName] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  async function add() {
    setLoading(true);
    await axios.post("http://localhost:3012/book", {
      bookName: bookName,
      pageNumber: pageNumber,
      email: props.email,
    });
    setLoading(false);
    props.setAdding(false);
  }

  return (
    <>
      <div className="add-box">
        {loading ? (
          <>
            <img className="loading-gif" alt="loading" src={loading_gif} />
          </>
        ) : (
          <>
            <h2>Add a book to your Mind Shelf</h2>
            <form>
              <label>Book name:</label>
              <input
                value={bookName}
                onChange={(input) => setBookName(input.target.value)}
                placeholder="The Animal Farm"
              />
              <label>Page number:</label>
              <input
                value={pageNumber}
                onChange={(input) =>
                  setPageNumber(Number.parseInt(input.target.value))
                }
                type="number"
                min={0}
              />
              <button onClick={add} type="button">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
      <div className="dark" onClick={() => props.setAdding(false)} />
    </>
  );
}
