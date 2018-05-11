import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AnimePage from './AnimePage';

class AnimeRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/ani/:ani_id' component={(props) => <AnimePage {...props} />} />
      </Switch>
    )
  }
}

export default AnimeRouter;