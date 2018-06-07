import React, { Component } from 'react';
import axios from 'axios';
import MovieDetails from './MovieDetails';

let tmdbUrl = 'https://image.tmdb.org/t/p';
let size = '/w500';
class MoviePage extends Component {
  state = { movie: null }
  getMovie = () => {
    //Dark Knight 155
    let id = this.props.match.params.movie_id;
    axios
      .get(`/api/movie/details/${id}`)
      .then(res => {
        this.setState({
          movie: res.data
        })
      })
  }
  handleAdd = () => {
    const { movie } = this.state;
    const { user } = this.props;

    axios
    .post('/users/movie/add', 
      {user_id: user.id, media_id: movie.id, status: 'watch', progress: 0})
    .then(() => {
      window.alert('Success!');
    })
    .catch(err => {
      this.setState({
        err: err
      })
    })
  }
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { movie } = this.state;
    const { handleAdd } = this;

    return (
      <div>
        {
          movie ?
          <MovieDetails media={movie} handleAdd={handleAdd} />
          : null
        }
      </div>
    )
  }
}

export default MoviePage;