import "./styles.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useEffect, useState } from "react";
import axios from "axios";
// from mac dsadsadsa jhani  godbutter
export default function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = async (id) => {
    // const removeBook = books.filter((book) => {
    //   return book.id !== id;
    // });
    // setBooks(removeBook);

    await axios.delete(`http://localhost:3001/books/${id}`);

    const removeBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(removeBook);
  };

  const updateBookById = async (id, newTitle) => {
    // const updateBook = books.map((book) => {
    //   return book.id === id ? { ...book, title: newTitle } : book;
    // });
    // setBooks(updateBook);
    // console.log("updated tedtd", updateBook);

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updateBook = books.map((book) => {
      return book.id === id ? { ...book, ...response.data } : book;
    });
    setBooks(updateBook);
  };

  const createBook = async (title) => {
    // const newBook = [...books, { id: Math.round(Math.random() * 9999), title }];
    // setBooks(newBook);

    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const newBook = [...books, response.data];
    setBooks(newBook);
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
