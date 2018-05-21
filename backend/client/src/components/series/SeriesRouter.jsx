import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SeriesPage from './SeriesPage';

class SeriesRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/series/:series_id' component={(props) => <SeriesPage {...props} />} />
      </Switch>
    )
  }
}

export default SeriesRouter;