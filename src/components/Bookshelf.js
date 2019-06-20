import React from "react";
import Book from "./Book";

const Bookshelf = ({ title, books, changeBookshelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map(book => (
              <li key={book.id}>
                <Book
                  key={book.id}
                  book={book}
                  changeBookshelf={changeBookshelf}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
