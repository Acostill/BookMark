import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SeriesCard extends Component {

  render() {
    const { media } = this.props;

    return (
      <div>
        <Link to={`/series/${media.id}`} >
          {media.name}
        </Link>
      </div>
    )
  }
}

export default SeriesCard;