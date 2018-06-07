import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import SeriesTab from './series/SeriesTab';
import MovieTab from './movie/MovieTab';
import BookTab from './book/BookTab';
import AnimeTab from './anime/AnimeTab';


class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      pageUser: null,
      edit: false
    }
  }

  getUser = () => {
    let { username } = this.props.match.params;
    let { user } = this.props;
    let edit = false;

    if (user) {
      edit = username === user.username;
    }

    axios
    .get(`/users/username/${username}`)
    .then(res => {
      this.setState({
        pageUser: res.data,
        edit
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({
        error: 'Error: User Not Found'
      })
    })
  }

  componentDidMount() {
    this.getUser();
  }
  render() {
    const { pageUser, seriesList, edit, error } = this.state;
    if (error) return <h1>{error}</h1>
    if (pageUser === null) return <h1>loading...</h1>
    return (
      <div>
        <h2>{pageUser.username}</h2>
        <div className='tab-links' >
          <Link to={`/user/${pageUser.username}/series`} className='white-link' >
            <h2>Series</h2>
          </Link>
          <Link to={`/user/${pageUser.username}/movie`} className='white-link' >
            <h2>Movies</h2>
          </Link>
          <Link to={`/user/${pageUser.username}/book`} className='white-link' >
            <h2>Books</h2>
          </Link>
          <Link to={`/user/${pageUser.username}/anime`} className='white-link' >
            <h2>Anime</h2>
          </Link>
        </div>
        <Switch>
          <Route path='/user/:username/series' component={(props) => <SeriesTab {...props} pageUser={pageUser} edit={edit} /> } />
          <Route path='/user/:username/movie' component={(props) => <MovieTab {...props} pageUser={pageUser} edit={edit} /> } />
          <Route path='/user/:username/book' component={(props) => <BookTab {...props} pageUser={pageUser} edit={edit} /> } />
          <Route path='/user/:username/anime' component={(props) => <AnimeTab {...props} pageUser={pageUser} edit={edit} /> } />
        </Switch>
      </div>
    )
  }
}

export default UserPage;