import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MovieCard extends Component {

  render() {
    let tmdbUrl = 'https://image.tmdb.org/t/p';
    let size = '/w500';
    const { media } = this.props;

    return (
      <div className='SeriesCard' >
        {
          media.poster_path
           ? <img src={`${tmdbUrl}${size}${media.poster_path}`} alt='poster'/>
           : <span className='no-image' ></span>
        }
        <div>
          <Link to={`/movie/${media.id}`} >
            <h3>{media.title}</h3>
          </Link>
          <div>{media.overview}</div>
        </div>
      </div>
    )
  }
}

export default MovieCard;