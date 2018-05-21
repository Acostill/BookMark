import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({media}) => {
  return (
    <div>
      <Link to={`/movie/${media.id}`} >
        {media.title}
      </Link>
    </div>
  )
}

export default MovieCard;