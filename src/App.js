import React, { Component } from "react";
import { update } from "./BooksAPI";
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import MyBooks from "./components/MyBooks";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class BooksApp extends Component {
  changeBookshelf = (book, shelf) => {
    update(book, shelf).then((book, shelf) => {
      const books = this.state.books.map(b => {
        if (b.id === book.id) {
          b.shelf = shelf;
        }
        return b;
      });
      this.setState({ books });
    });
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MyBooks} />
            <Route
              path="/search"
              render={_ => (
                <SearchBooks changeBookshelf={this.changeBookshelf} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
