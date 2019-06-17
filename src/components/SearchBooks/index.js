import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { search } from "../../BooksAPI";
import Book from "../Book";
import { Debounce } from "react-throttle";

class SearchBooks extends Component {
  state = {
    books: []
  };

  render() {
    const { books } = this.state;
    const { changeBookshelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <Debounce time="200" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={event =>
                  search(event.target.value).then(books => {
                    this.setState({ books });
                  })
                }
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(books) &&
              books.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    key={book.id}
                    changeBookshelf={changeBookshelf}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
