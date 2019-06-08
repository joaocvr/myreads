import React, { Component } from "react";
import Book from "../Book";

class Bookshelf extends Component {
  render() {
    const { title, books } = this.props;
    console.log(title);
    console.log(books);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books && books.map(item => <Book key={item.id} book={item} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
