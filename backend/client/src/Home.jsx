import React, { Component } from 'react';
import collage from './images/silhouette.jpg';

class Home extends Component {
  render() {
    return (
      <div id='home' >
        <img id='home-backdrop' src={collage} alt='movie collage' />
        <div className='fade-down' >
          <h1>Welcome To BookMark</h1>
          <h2>Your digital BookMark for TV, Books, and more</h2>
        </div>
      </div>
    )
  }
}

export default Home;