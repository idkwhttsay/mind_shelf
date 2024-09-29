import { Book } from "../data/book";
import "../scss/popupEdit.scss";

export function PopupEdit(props: {
  book: Book;
  setBook: (book: Book | null) => void;
}) {
  return (
    <>
      <div className="dark" onClick={() => props.setBook(null)} />
      <div className="edit-box">
        <form>
          <label>Edit your page number:</label>
          <input />
        </form>
        <div className="description">{props.book.description}</div>
      </div>
    </>
  );
}
