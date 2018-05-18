import React, { Component } from 'react';
import axios from 'axios';

let tmdbUrl = 'https://image.tmdb.org/t/p';
let size = '/w500';
class AnimePage extends Component {
  state = { anime: null }
  getAnime = () => {
    //Code Geass 31724
    let id = this.props.match.params.ani_id;
    axios
      .get(`/api/ani/details/${id}`)
      .then(res => {
        this.setState({
          anime: res.data
        })
      })
  }
  componentDidMount() {
    this.getAnime();
  }
  render() {
    const { anime } = this.state;

    return (
      <div>
        {
          anime ?
          <div>
            <h2 style={{color: 'grey'}}>{anime.title}</h2>
            <img src={`${tmdbUrl}${size}${anime.poster_path}`} alt='poster'/>
            <p>{anime.overview}</p>
          </div>
          : null
        }
      </div>
    )
  }
}

export default AnimePage;