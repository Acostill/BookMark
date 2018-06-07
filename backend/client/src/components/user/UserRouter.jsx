import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserPage from './UserPage';

class UserRouter extends Component {
  render() {
    const { user } = this.props;
    return (
      <Switch>
        <Route path='/user/:username' component={(props) => <UserPage {...props} user={user} />} />
      </Switch>
    )
  }
}

export default UserRouter;