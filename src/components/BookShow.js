import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

const BookShow = ({ book }) => {
  const { deleteBookById } = useContext(BooksContext);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = () => {
    setToggle(false);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />

      {!toggle ? book.title : <BookEdit onSubmit={handleSubmit} book={book} />}

      <div className="actions">
        <button className="edit" onClick={handleToggle}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
