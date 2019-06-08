import React, { Component } from "react";

class ListBooks extends Component {
  createList = books => {
    let list = [];

    for (const book of books) {
      const listItem = (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url("${book.imageLinks.thumbnail}")`
                }}
              />
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}}</div>
          </div>
        </li>
      );
      list.push(listItem);
    }

    return list;
  };

  render() {
    const books = this.props.books;

    return (
      <div>
        <ol className="books-grid">{this.createList(books)}</ol>
      </div>
    );
  }
}

export default ListBooks;
