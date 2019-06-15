import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { search, update } from "../../BooksAPI";
import Book from "../Book";

class SearchBooks extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };

    this.changeBookshelf = this.changeBookshelf.bind(this);
  }

  changeBookshelf(book, shelf) {
    update(book, shelf);
    let { books } = this.state;
    books.forEach(b => {
      if (b.id === book.id) {
        b.shelf = shelf;
      }
    });
    this.setState({ books });
  }

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
              onChange={event =>
                search(event.target.value).then(books => {
                  this.setState({ books });
                })
              }
            />
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
                    changeBookshelf={this.changeBookshelf}
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
