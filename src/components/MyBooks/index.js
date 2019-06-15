import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../BooksAPI";
import Bookshelf from "../Bookshelf";

class MyBooks extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };

    this.changeBookshelf = this.changeBookshelf.bind(this);
  }

  componentDidMount() {
    getAll().then(books => {
      this.setState({ books });
      return;
    });
  }

  changeBookshelf(book) {
    const { books } = this.state;
    books.map(b => {
      return b.id === book.id ? book : b;
    });
    this.setState({ books });
  }

  render() {
    const { books } = this.state;

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
                changeBookshelf={this.changeBookshelf}
              />
              <Bookshelf
                title="Want to Read"
                books={books.filter(book => book.shelf === "wantToRead")}
                changeBookshelf={this.changeBookshelf}
              />
              <Bookshelf
                title="Read"
                books={books.filter(book => book.shelf === "read")}
                changeBookshelf={this.changeBookshelf}
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
  }
}

export default MyBooks;
