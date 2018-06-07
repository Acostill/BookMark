import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SeriesResult extends Component {

  render() {
    let tmdbUrl = 'https://image.tmdb.org/t/p';
    let size = '/w500';
    const { media } = this.props;

    return (
      <div className='SeriesResult' >
        <img src={`${tmdbUrl}${size}${media.poster_path}`} alt='poster'/>
        <div>
          <Link to={`/series/${media.id}`} >
            <h3>{media.name}</h3>
          </Link>
          <div>{media.description}</div>
        </div>
      </div>
    )
  }
}

export default SeriesResult;