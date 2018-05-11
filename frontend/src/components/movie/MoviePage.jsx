import React, { Component } from 'react';
import axios from 'axios';
import config from '../../local/config';

let tmdbKey = config.keys.tmdb;
let tmdbUrl = 'https://image.tmdb.org/t/p';
let size = '/w500';
class MoviePage extends Component {
  state = { movie: null }
  getMovie = () => {
    //Dark Knight 155
    let id = this.props.match.params.movie_id;
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbKey}&language=en-US`)
      .then(res => {
        this.setState({
          movie: res.data
        })
      })
  }
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { movie } = this.state;
    return (
      <div>
        {
          movie ?
          <div>
            <h2 style={{color: 'grey'}}>{movie.title}</h2>
            <img src={`${tmdbUrl}${size}${movie.poster_path}`} alt='poster'/>
            <p>{movie.overview}</p>
          </div>
          : null
        }
      </div>
    )
  }
}

export default MoviePage;