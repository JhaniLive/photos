import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookCreate = () => {
  const { createBook } = useContext(BooksContext);

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book </h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
