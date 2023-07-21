import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookEdit = ({ book, onSubmit }) => {
  const { updateBookById } = useContext(BooksContext);

  const [edit, setEdit] = useState(book.title);

  const handleUpdate = (e) => {
    e.preventDefault();
    onSubmit();
    updateBookById(book.id, edit);
  };

  return (
    <form className="edit-book" onSubmit={handleUpdate}>
      <input
        className="input"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
