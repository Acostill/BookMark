import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './components/Search';

class NavBar extends Component {
  render() {
    const { user, logout } = this.props
    return (
      <div id='nav' >
        <div className='left' > 
          <i class='far fa-bookmark' id='logo' ></i>
          <Link to='/' className='white-link' >
            <h1>BookMark</h1>
          </Link>
        </div>
        <div className='mid' >
          <Link to='/search' className='white-link' >Search</Link>
        </div>
        <div className='right' >
          {
            user 
            ? <React.Fragment>
              <div>
                <Link to={`/user/${user.username}/series`} className='white-link' >{user.username}</Link>
              </div>
              <div>
                <button onClick={logout} >Logout</button> 
              </div>
              </React.Fragment>
            : <Link to='/login' className='white-link' >Login</Link>
          }
        </div>
                
      </div>
    )
  }
}

export default NavBar;