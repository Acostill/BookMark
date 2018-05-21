import React, { Component } from 'react';
import axios from 'axios';
import TVDetails from './TVDetails';

let tmdbUrl = 'https://image.tmdb.org/t/p';
let size = '/w500';
class TVPage extends Component {
  state = { tv: null }
  getTV = () => {
    //Westworld 63247
    let id = this.props.match.params.tv_id;
    axios
      .get(`/api/tv/details/${id}`)
      .then(res => {
        this.setState({
          tv: res.data
        })
      })
  }
  componentDidMount() {
    this.getTV();
  }
  render() {
    const { tv } = this.state;
    return (
      <div>
        {
          tv ?
          <TVDetails tv={tv} />
          : null
        }
      </div>
    )
  }
}

export default TVPage;