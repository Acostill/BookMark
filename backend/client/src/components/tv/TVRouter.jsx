import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TVPage from './TVPage';

class TVRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/series/:series_id' component={(props) => <TVPage {...props} />} />
      </Switch>
    )
  }
}

export default TVRouter;