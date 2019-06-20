import React, { Component } from "react";
import { update, getAll } from "./BooksAPI";
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import MyBooks from "./components/MyBooks";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class BooksApp extends Component {
  state = {
    books: []
  };

  changeBookshelf = (book, shelf) => {
    update(book, shelf).then(_ => {
      const books = this.state.books.map(b => {
        if (b.id === book.id) {
          b.shelf = shelf;
        }
        return b;
      });
      this.setState({ books });
    });
  };

  componentDidMount() {
    getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={_ => (
                <MyBooks books={books} changeBookshelf={this.changeBookshelf} />
              )}
            />
            <Route
              path="/search"
              render={_ => (
                <SearchBooks
                  books={books}
                  changeBookshelf={this.changeBookshelf}
                  updateParent={_ => this.render()}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
