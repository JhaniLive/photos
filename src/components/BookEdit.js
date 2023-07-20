import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [edit, setEdit] = useState(book.title);

  const handleUpdate = (e) => {
    e.preventDefault();
    onSubmit(book.id, edit);
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
