import React, { Component } from 'react';
import axios from 'axios';
import AnimeDetails from './AnimeDetails';

let tmdbUrl = 'https://image.tmdb.org/t/p';
let size = '/w500';
class AnimePage extends Component {
  state = { anime: null }
  getAnime = () => {
    //Code Geass 31724
    let id = this.props.match.params.anime_id;
    axios
      .get(`/api/anime/details/${id}`)
      .then(res => {
        this.setState({
          anime: res.data
        })
      })
  }
  handleAdd = () => {
    const { anime } = this.state;
    const { user } = this.props;

    axios
    .post('/users/anime/add', 
      {user_id: user.id, media_id: anime.id, status: 'watch', progress: 0})
    .then(() => {
      window.alert('Success!');
    })
    .catch(err => {
      this.setState({
        err: err
      })
    })
  }
  componentDidMount() {
    this.getAnime();
  }
  render() {
    const { anime } = this.state;
    const { handleAdd } = this;
    return (
      <div>
        {
          anime 
          ? <AnimeDetails media={anime} handleAdd={handleAdd} />
          : null
        }
      </div>
    )
  }
}

export default AnimePage;