import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviePage from './MoviePage';

class MovieRouter extends Component {
  render() {
    const { user } = this.props;
    
    return (
      <Switch>
        <Route path='/movie/:movie_id' component={(props) => <MoviePage {...props} user={user} />} />
      </Switch>
    )
  }
}

export default MovieRouter; 