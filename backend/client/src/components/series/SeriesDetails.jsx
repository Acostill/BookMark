import React from 'react';

const TVDetails = ({series, handleAdd}) => {
  let tmdbUrl = 'https://image.tmdb.org/t/p';
  let size = '/w500';

  return (
    <div className='media-details' >
      <div className='header' style={{backgroundImage: `url(${tmdbUrl}${size}${series.backdrop_path})`}}>
      </div>
      <div className='img-container' >
        <img className='detail-img' src={`${tmdbUrl}${size}${series.poster_path}`} alt='poster'/>
        <button className='detail-btn' onClick={handleAdd} >Add</button>
      </div>
      <div className='media-body' >
        <h2 style={{color: 'grey'}}>{series.title}</h2>
        <p>{series.overview}</p>
      </div>
    </div>
  )
}

export default TVDetails;