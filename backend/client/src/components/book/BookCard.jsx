import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({media}) => {
  return (
    <div>
      <Link to={`/book/${media.id}`} >
        {media.volumeInfo.title}
      </Link>
    </div>
  )
}

export default BookCard;