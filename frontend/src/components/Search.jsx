import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      select: 'TV',
      results: [],
    }
  }

  handleSelect = e => {
    this.setState({
      select: e.target.value
    })
  }
  handleInput = e => {
    this.setState({
      input: e.target.value
    })
  }
  handleSearch = () => {
    let { input, select } = this.state;
  }

  render() {
    return (
      <div>
        <select value={this.state.select} onChange={this.handleSelect} >
          <option>TV</option>
          <option>Movie</option>
          <option>Book</option>
        </select>
        <input placeholder='Search' value={this.state.input} onChange={this.handleInput} />
        <button onClick={this.handleSearch} >Search</button>
      </div>
    )
  }
}

export default Search;