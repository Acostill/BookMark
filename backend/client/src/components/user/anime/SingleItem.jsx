import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SingleItem extends Component {
  constructor() {
    super();
    this.state = {
      media: null,
      progress: null
    }
  }

  getMediaInfo = () => {
    const { bookmark } = this.props;
    axios
    .get(`/api/anime/details/${bookmark.media_id}`)
    .then(res => {
      this.setState({
        media: res.data,
        progress: this.props.bookmark.savepoint
      })
    })
  }
  handleButton = e => {
    let { progress, media } = this.state;
    if (progress >= media.number_of_episodes && e.target.name === '1') return;
    if (progress <= 0 && e.target.name === '-1') return;
    let id = Number(e.target.value);
    progress += Number(e.target.name);

    axios
    .post('/users/anime/progress', { progress: progress, id: id })
    .then(res => {
      this.setState({
        progress: progress
      })
    })
  }
  handleNum = e => {
    let { media } = this.state;
    let progress = Number(e.target.value);
    if (progress > media.number_of_episodes || progress < 0) return;
    let id = Number(e.target.name);

    axios
    .post('/users/anime/progress', { progress: progress, id: id })
    .then(res => {
      this.setState({
        progress: progress
      })
    })
  }
  componentDidMount() {
    this.getMediaInfo();
  }
  render() {
    let tmdbUrl = 'https://image.tmdb.org/t/p';
    let size = '/w500';
    const { handleButton, handleNum } = this;
    const { bookmark, edit } = this.props;
    const { media, progress } = this.state;

    if (!media) {
      return (
        <div className='SingleItem' >
          <div className='list-img' ></div>
          <div></div>
        </div>
      )
    }
    return (
      <div className='SingleItem' >
        <img className='list-img' src={`${tmdbUrl}${size}${media.poster_path}`} alt='poster'/>
        <div>
          <div>
            <Link to={`/series/${media.id}`} >
              {media.title}
            </Link>
          </div>
          <div className='status'>
            {bookmark.status}
          </div>
          <div className='progressbar-container' style={{width:'300px', height:'25px', backgroundColor:'black'}} >
            <div className='progressbar' style={{width: `${(progress/media.number_of_episodes) * 300}px`, height: '25px', backgroundColor:'darkgreen'}}/>
          </div>
          <div>
            {
              edit
                ? <input type='number' onChange={handleNum} value={progress} style={{width: '45px', height: '30px', fontSize: '20px'}} />
                : progress
            }
            /{media.number_of_episodes}
          </div>
          {
            edit
              ? <div>
                  <button onClick={handleButton} name='1' value={bookmark.id} >Up</button>
                  <button onClick={handleButton} name='-1' value={bookmark.id} >Down</button>
                </div>
              : <div></div>

          }
        </div>
      </div>
    )
  }
}

export default SingleItem;