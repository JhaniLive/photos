import "./styles.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";
// from mac
export default function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const removeBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(removeBook);
  };

  const updateBookById = (id, newTitle) => {
    const updateBook = books.map((book) => {
      return book.id === id ? { ...book, title: newTitle } : book;
    });

    setBooks(updateBook);
    console.log("updated tedtd", updateBook);
  };

  const createBook = (title) => {
    const newBook = [...books, { id: Math.round(Math.random() * 9999), title }];
    setBooks(newBook);

    // console.log("this is jhani", title);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={deleteBookById}
        onUpdate={updateBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
