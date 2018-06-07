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
  handleAdd = () => {
    const { series } = this.state;
    const { user } = this.props;

    axios
    .post('/users/series/add', 
      {user_id: user.id, series_id: series.id, status: 'watch', progress: 0})
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
    window.scrollTo(0, 0);    
    this.getSeries();
  }
  render() {
    const { handleAdd } = this;
    const { series } = this.state;
    return (
      <div>
        {
          series ?
          <SeriesDetails series={series} handleAdd={handleAdd} />
          : null
        }
      </div>
    )
  }
}

export default SeriesPage;
