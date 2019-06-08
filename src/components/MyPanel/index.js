import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListBooks from "../ListBooks";
import { getAll } from "../../BooksAPI";

class MyPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
  }

  componentDidMount() {
    getAll().then(
      books => {
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
      },
      reject => {
        console.log(
          "MyPanel - componentDidMount() - BooksAPI.getAll()",
          reject
        );
      }
    );
  }

  render() {
    const currentlyReading = this.state.currentlyReading;
    const wantToRead = this.state.wantToRead;
    const read = this.state.read;

    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ListBooks books={currentlyReading} />
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ListBooks books={wantToRead} />
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ListBooks books={read} />
                </div>
              </div>
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

export default MyPanel;
