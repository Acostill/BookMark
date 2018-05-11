import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviePage from './MoviePage';

class MovieRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/movie/:movie_id' component={(props) => <MoviePage {...props} />} />
      </Switch>
    )
  }
}

export default MovieRouter; 