import React from 'react';

const MovieDetails = ({media, handleAdd}) => {
  let tmdbUrl = 'https://image.tmdb.org/t/p';
  let size = '/w500';

  return (
    <div className='media-details' >
      <div className='header' style={{backgroundImage: `url(${tmdbUrl}${size}${media.backdrop_path})`}}>
      </div>
      <div className='img-container' >
        <img className='detail-img' src={`${tmdbUrl}${size}${media.poster_path}`} alt='poster'/>
        <button className='detail-btn' onClick={handleAdd} >Add</button>
      </div>
      <div className='media-body' >
        <h2 style={{color: 'grey'}}>{media.title}</h2>
        <p>{media.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetails;