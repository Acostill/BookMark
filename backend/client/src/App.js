import React, { Component } from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import MovieRouter from './components/movie/MovieRouter';
import SeriesRouter from './components/series/SeriesRouter';
import AnimeRouter from './components/anime/AnimeRouter';
import BookRouter from './components/book/BookRouter';
import UserRouter from './components/user/UserRouter';
import NavBar from './NavBar';
import Search from './components/Search';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  getUser = () => {
    axios
    .get('/users/session_user')
    .then(res => {
      this.setState({
          user: res.data
      })
    })
  }
  setUser = (user) => {
    this.setState({
      user: user
    })
  }
  logout = () => {
    axios
    .get('/users/logout')
    .then(() => {
      this.setState({
        user: null
      })
    });
  }
  componentDidMount() {
    this.getUser();
  }
  render() {
    const { getUser, setUser, logout } = this;
    const { user } = this.state;

    return (
      <div className="App">
        <NavBar user={user} logout={logout} />
        <div className='content' >
          <Switch>
            <Route exact path='/' component={() => <Home />} />
            <Route path='/search' component={() => <Search /> } />
            <Route path='/movie' component={(props) => <MovieRouter {...props} user={user} />} />
            <Route path='/series' component={(props) => <SeriesRouter {...props} user={user} />} />
            <Route path='/anime' component={(props) => <AnimeRouter {...props} user={user} />} />
            <Route path='/book' component={(props) => <BookRouter {...props} user={user} />} />
            <Route path='/user' component={(props) => <UserRouter {...props} user={user} />} />
            <Route path='/login' component={() => <Login setUser={setUser} user={user} />} />
            <Route path='/register' component={() => <Register />} />
          </Switch>
        </div>
        {/* <div id='footer'>
        </div> */}
      </div>
    );
  }
}

export default App;