import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import MyPanel from "./components/MyPanel";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={MyPanel} />
            <Route path="/search" component={SearchBooks} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
