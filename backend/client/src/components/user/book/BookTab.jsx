import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SingleItem from './SingleItem';


class SeriesTab extends Component {
  constructor() {
    super();
    this.state = {
      statusLists: {},
      seriesList: []
    }
  }
  getStatusLists = () => {
    let { pageUser } = this.props;
    let user_id = pageUser.id;

    axios
    .post(`/users/book/list`, { user_id: user_id })
    .then(res => {
      this.setState({
        seriesList: res.data
      })
    })
    .catch(err => {console.log('Error getting status lists')});
  } 
  componentDidMount() {
    this.getStatusLists();
  }
  render() {
    const { statusLists, seriesList } = this.state;
    const { edit } = this.props;

    return (
      <div>
        {seriesList.map(bookmark => <SingleItem bookmark={bookmark} edit={edit} />)}
      </div>
    )
  }
}

export default SeriesTab;