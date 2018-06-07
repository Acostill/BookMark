import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SeriesCard extends Component {

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
          <Link to={`/series/${media.id}`} >
            <h3>{media.name}</h3>
          </Link>
          <div>{media.description}</div>
        </div>
      </div>
    )
  }
}

export default SeriesCard;