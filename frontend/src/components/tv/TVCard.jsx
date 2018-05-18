import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TVCard extends Component {

  render() {
    const { media } = this.props;

    return (
      <div>
        <Link to={`/tv/${media.id}`} >
          {media.name}
        </Link>
      </div>
    )
  }
}

export default TVCard;