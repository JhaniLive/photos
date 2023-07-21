import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const removeBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(removeBook);
  };

  const updateBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updateBook = books.map((book) => {
      return book.id === id ? { ...book, ...response.data } : book;
    });
    setBooks(updateBook);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const newBook = [...books, response.data];
    setBooks(newBook);
  };

  const valueToStore = {
    books: books,
    deleteBookById: deleteBookById,
    updateBookById: updateBookById,
    createBook: createBook,
    fetchBooks: fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToStore}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
