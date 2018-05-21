import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './movie/MovieCard';
import TVCard from './tv/TVCard';
import AnimeCard from './anime/AnimeCard';
import BookCard from './book/BookCard';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      select: 'Anime',
      results: [],
      resultType: null
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
    if (select === 'Anime') {
      //search Anime
      axios
        .get(`/api/anime/search/${input}`)
        .then(res => {
          this.setState({
            results: res.data.results,
            resultType: 'anime'
          })
        })
    } else if (select === 'TV') {
      //search TV
      axios
      .get(`/api/series/search/${input}`)
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data.results,
          resultType: 'tv'
        })
      })
    } else if (select === 'Movie') {
      //search Movie
      axios
      .get(`/api/movie/search/${input}`)
      .then(res => {
        this.setState({
          results: res.data.results,
          resultType: 'movie'
        })
      })
    } else if (select === 'Book') {
      //search Book
      axios
      .get(`/api/book/search/${input}`)
      .then(res => {
        this.setState({
          results: res.data.items,
          resultType: 'book'
        })
      })
    }
  }

  render() {
    const { results, resultType } = this.state;
    console.log(this.state);
    return (
      <div>
        <select value={this.state.select} onChange={this.handleSelect} >
          <option>Anime</option>
          <option>Book</option>
          <option>Movie</option>
          <option>TV</option>
        </select>
        <input placeholder='Search' value={this.state.input} onChange={this.handleInput} />
        <button onClick={this.handleSearch} >Search</button>
        {resultType === 'tv' ? 
          results.map(media => <TVCard media={media} />)
          :
          resultType === 'movie' ?
            results.map(media => <MovieCard media={media} />)
            :
            resultType === 'anime' ?
              results.map(media => <AnimeCard media={media} />)
              :
              resultType === 'book' ?
                results.map(media => <BookCard media={media} />)
                :
                null
        }
      </div>
    )
  }
}

export default Search;