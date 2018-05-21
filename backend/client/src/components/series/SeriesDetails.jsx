import React from 'react';

const TVDetails = ({series}) => {
  let tmdbUrl = 'https://image.tmdb.org/t/p';
  let size = '/w500';

  return (
    <div>
      <h2 style={{color: 'grey'}}>{series.title}</h2>
      <img src={`${tmdbUrl}${size}${series.poster_path}`} alt='poster'/>
      <p>{series.overview}</p>
    </div>
  )
}

export default TVDetails;