import React, { Component } from "react";
import Book from "../Book";

class Bookshelf extends Component {
  render() {
    const { title, books, changeBookshelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books &&
              books.map(b => (
                <Book key={b.id} book={b} changeBookshelf={changeBookshelf} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
