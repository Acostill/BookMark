import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AnimePage from './AnimePage';

class AnimeRouter extends Component {
  render() {
    const { user } = this.props;
    return (
      <Switch>
        <Route path='/anime/:anime_id' component={(props) => <AnimePage {...props} user={user} />} />
      </Switch>
    )
  }
}

export default AnimeRouter;