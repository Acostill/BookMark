import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import MovieRouter from './components/movie/MovieRouter';
import SeriesRouter from './components/series/SeriesRouter';
import AnimeRouter from './components/anime/AnimeRouter';
import BookRouter from './components/book/BookRouter';
import NavBar from './NavBar';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Search />
        <Switch>
          <Route path='/movie' component={MovieRouter} />
          <Route path='/series' component={SeriesRouter} />
          <Route path='/anime' component={AnimeRouter} />
          <Route path='/book' component={BookRouter} />
        </Switch>
      </div>
    );
  }
}

export default App;