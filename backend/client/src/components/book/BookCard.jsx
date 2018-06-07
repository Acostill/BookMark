import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BookCard extends Component {

  render() {
    const { media } = this.props;
    console.log('media', media);
    return (
      <div className='SeriesCard' >
        {
          media.volumeInfo.imageLinks
           ? <img src={media.volumeInfo.imageLinks.smallThumbnail} alt='poster'/>
           : <span className='no-image' ></span>
        }
        <div>
          <Link to={`/book/${media.id}`} >
            <h3>{media.volumeInfo.title}</h3>
          </Link>
          <div>{media.volumeInfo.description}</div>
        </div>
      </div>
    )
  }
}

export default BookCard;