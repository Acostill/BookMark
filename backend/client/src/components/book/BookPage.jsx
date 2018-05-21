import React, { Component } from 'react';
import axios from 'axios';

class BookPage extends Component {
  state = { book: null }
  getBook = () => {
    //Ender's Game WEW1cC7yaCQC
    let id = this.props.match.params.book_id;
    axios
      .get(`/api/book/details/${id}`)
      .then(res => {
        this.setState({
          book: res.data
        })
      })
  }
  componentDidMount() {
    this.getBook();
  }
  render() {
    const { book } = this.state;
    return (
      <div>
        {
          book ?
          <div>
            <h2 style={{color: 'grey'}}>{book.volumeInfo.title}</h2>
            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.small : null} />
            <p>{book.volumeInfo.description}</p>
          </div>
          : null
        }
      </div>
    )
  }
}

export default BookPage;