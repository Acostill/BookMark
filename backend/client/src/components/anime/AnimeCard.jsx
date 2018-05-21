import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCard = ({media}) => {
  return (
    <div>
      <Link to={`/anime/${media.id}`} >
        {media.name}
      </Link>
    </div>
  )
}

export default AnimeCard;