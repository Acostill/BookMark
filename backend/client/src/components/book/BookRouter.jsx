import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BookPage from './BookPage';

class BookRouter extends Component {
  render() {
    const { user } = this.props;
    return (
      <Switch>
        <Route path='/book/:book_id' component={(props) => <BookPage {...props} user={user} />} />
      </Switch>
    )
  }
}

export default BookRouter;