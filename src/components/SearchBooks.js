import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { search } from "../BooksAPI";
import Book from "./Book";
import { Debounce } from "react-throttle";

class SearchBooks extends Component {
  state = {
    searchedBooks: []
  };

  searchBooks = event => {
    search(event.target.value).then(searchedBooks => {
      if (Array.isArray(searchedBooks)) {
        const { books } = this.props;
        const updatedBooks = searchedBooks.map(sb => {
          const myBook = books.find(mb => mb.id === sb.id);
          if (myBook) {
            return myBook;
          }
          return sb;
        });
        searchedBooks = updatedBooks;
      } else {
        searchedBooks = [];
      }
      this.setState({ searchedBooks });
    });
  };

  render() {
    const { searchedBooks } = this.state;
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
                onChange={this.searchBooks}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map(book => (
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
