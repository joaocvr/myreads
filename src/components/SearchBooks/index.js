import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { search as searchAPI } from "../../BooksAPI";
import Book from "../Book";

class SearchBooks extends Component {
  state = {
    books: []
  };

  render() {
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => {
                searchAPI(event.target.value).then(books => {
                  this.setState({ books });
                });
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books &&
              books.map(b => (
                <li key={b.id}>
                  <Book book={b} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
