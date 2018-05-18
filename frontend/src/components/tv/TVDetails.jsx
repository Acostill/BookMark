import React from 'react';

const TVDetails = ({tv}) => {
  let tmdbUrl = 'https://image.tmdb.org/t/p';
  let size = '/w500';
  console.log(tv);
  return (
    <div>
      <h2 style={{color: 'grey'}}>{tv.title}</h2>
      <img src={`${tmdbUrl}${size}${tv.poster_path}`} alt='poster'/>
      <p>{tv.overview}</p>
    </div>
  )
}

export default TVDetails;