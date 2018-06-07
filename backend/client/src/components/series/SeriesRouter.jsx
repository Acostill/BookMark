import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SeriesPage from './SeriesPage';

class SeriesRouter extends Component {
  render() {
    const { user } = this.props;
    return (
      <Switch>
        <Route path='/series/:series_id' component={(props) => <SeriesPage {...props} user={user} />} />
      </Switch>
    )
  }
}

export default SeriesRouter;