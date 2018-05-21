import React, { Component } from 'react';
import axios from 'axios';
import SeriesDetails from './SeriesDetails';

let tmdbUrl = 'https://image.tmdb.org/t/p';
let size = '/w500';
class SeriesPage extends Component {
  state = { series: null }
  getSeries = () => {
    //Westworld 63247
    let id = this.props.match.params.series_id;
    axios
      .get(`/api/series/details/${id}`)
      .then(res => {
        this.setState({
          series: res.data
        })
      })
  }
  componentDidMount() {
    this.getSeries();
  }
  render() {
    const { series } = this.state;
    return (
      <div>
        {
          series ?
          <SeriesDetails series={series} />
          : null
        }
      </div>
    )
  }
}

export default SeriesPage;