import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import MyBooks from "./components/MyBooks";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MyBooks} />
            <Route path="/search" component={SearchBooks} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
