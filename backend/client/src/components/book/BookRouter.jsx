import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BookPage from './BookPage';

class BookRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/book/:book_id' component={(props) => <BookPage {...props} />} />
      </Switch>
    )
  }
}

export default BookRouter;