import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../BooksAPI";
import Bookshelf from "../Bookshelf";

class MyBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
  }

  componentDidMount() {
    getAll().then(books => {
      let currentlyReading = [];
      let wantToRead = [];
      let read = [];

      for (const book of books.values()) {
        if (book.shelf === "currentlyReading") {
          currentlyReading.push(book);
        } else if (book.shelf === "wantToRead") {
          wantToRead.push(book);
        } else {
          read.push(book);
        }
      }
      this.setState({ currentlyReading, wantToRead, read });
      return;
    });
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state;

    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReadsApp</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf title="Currently Reading" books={currentlyReading} />
              <Bookshelf title="Want to Read" books={wantToRead} />
              <Bookshelf title="Read" books={read} />
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
