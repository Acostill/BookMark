import React, { Component } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails';

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
  handleAdd = () => {
    const { book } = this.state;
    const { user } = this.props;

    axios
    .post('/users/book/add', 
      {user_id: user.id, media_id: book.id, status: 'watch', progress: 0})
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
    this.getBook();
  }
  render() {
    const { book } = this.state;
    const { handleAdd } = this;

    return (
      <div>
        {
          book 
          ? <BookDetails media={book} handleAdd={handleAdd} />
          : null
        }
      </div>
    )
  }
}

export default BookPage;