import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { search as searchAPI } from "../../BooksAPI";
import ListBooks from "../ListBooks";

class SearchBooks extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };

    this.searchBook = this.searchBook.bind(this);
    this.showBooksSearched = this.showBooksSearched.bind(this);
  }

  showBooksSearched() {
    let liItens = [];
    for (const book of this.state.books) {
      liItens.push(<li>{book.title}</li>);
    }
    return liItens;
  }

  searchBook(event) {
    const query = event.target.value + event.key;
    searchAPI(query).then(
      books => {
        this.setState({ ...this.state, books });
      },
      _ => {} //reject
    );
    return;
  }

  render() {
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
              onKeyPress={this.searchBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {<ListBooks books={this.state.books} />}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
