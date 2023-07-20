import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onUpdate }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = (id, newTitle) => {
    setToggle(false);
    onUpdate(id, newTitle);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />

      {!toggle ? book.title : <BookEdit onSubmit={handleSubmit} book={book} />}

      <div className="actions">
        <button className="edit" onClick={handleToggle}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
