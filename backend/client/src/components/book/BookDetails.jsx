import React from 'react';

const BookDetails = ({media, handleAdd}) => {
  let tmdbUrl = 'https://image.tmdb.org/t/p';
  let size = '/w500';
  console.log('media', media);
  // return (
  //   <div>
  //     <h2 style={{color: 'grey'}}>{media.volumeInfo.title}</h2>
  //     <img src={media.volumeInfo.imageLinks ? media.volumeInfo.imageLinks.small : null} />
  //     <p>{media.volumeInfo.description}</p>
  // </div>
  // )
  return (
    <div className='media-details' >
      <div className='header' style={{backgroundImage: `url(${media.volumeInfo.imageLinks.large})`}}>
      </div>
      <div className='img-container' >
        <img className='detail-img' src={media.volumeInfo.imageLinks ? media.volumeInfo.imageLinks.small : null} alt='poster'/>
        <button onClick={handleAdd} className='detail-btn' >Add</button>
      </div>
      <div className='media-body' >
        <h2 style={{color: 'grey'}}>{media.volumeInfo.title}</h2>
        <p>{media.volumeInfo.description}</p>
      </div>
    </div>
  )
}

export default BookDetails;