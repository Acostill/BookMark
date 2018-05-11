import React, { Component } from 'react';
import axios from 'axios';
import config from '../../local/config';

let tmdbKey = config.keys.tmdb;
let tmdbUrl = 'https://image.tmdb.org/t/p';
let size = '/w500';
class TVPage extends Component {
  state = { show: null }
  getShow = () => {
    //Westworld 63247
    let id = this.props.match.params.show_id;
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${tmdbKey}&language=en-US`)
      .then(res => {
        this.setState({
          show: res.data
        })
      })
  }
  componentDidMount() {
    this.getShow();
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        {
          show ?
          <div>
            <h2 style={{color: 'grey'}}>{show.title}</h2>
            <img src={`${tmdbUrl}${size}${show.poster_path}`} alt='poster'/>
            <p>{show.overview}</p>
          </div>
          : null
        }
      </div>
    )
  }
}

export default TVPage;