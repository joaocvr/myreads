import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const MyBooks = ({ books, changeBookshelf }) => {
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReadsApp</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              books={books.filter(book => book.shelf === "currentlyReading")}
              changeBookshelf={changeBookshelf}
            />
            <Bookshelf
              title="Want to Read"
              books={books.filter(book => book.shelf === "wantToRead")}
              changeBookshelf={changeBookshelf}
            />
            <Bookshelf
              title="Read"
              books={books.filter(book => book.shelf === "read")}
              changeBookshelf={changeBookshelf}
            />
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default MyBooks;
