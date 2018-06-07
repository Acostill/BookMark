import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';


class Login extends React.Component {

  state = {
    usernameInput: this.props.usernameInput || '',
    passwordInput: this.props.passwordInput || '',
    confirmInput: '',
    message: '',
    user: null
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  submitForm = e => {
    e.preventDefault();
    const { setUser } = this.props;
    const { usernameInput, passwordInput } = this.state;

    axios
      .post('/users/login', {
        username: usernameInput,
        password: passwordInput
      })
      .then(res => {
        let user = res.data;
        setUser(user);
      })
      .catch(err => {
        this.setState({
          usernameInput: '',
          passwordInput: '',
          message: 'username/password not found'
        });
      });

  };
  componentDidMount() {
    // this.getUser()
  }
  render() {

    const { handleInputChange, submitForm } = this;
    const { usernameInput, passwordInput, message, loggedIn } = this.state;
    const { user } = this.props;

    if (user) {
      return <Redirect to={`/user/${user.username}/series`} />
    }
    if (loggedIn) {
      return <Redirect to={`/user/${user.username}/series`} />;

    }

    return (
      <div className='backdrop' >
        <div className='auth-container' >
          <div className='auth-box'>
            <h1>BookMark</h1>
            <form onSubmit={submitForm}>
              <label>
                <input
                  type="text"
                  name="usernameInput"
                  placeholder='Username'
                  value={usernameInput}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                <input
                  type="password"
                  name="passwordInput"
                  placeholder='Password'
                  value={passwordInput}
                  onChange={handleInputChange}
                />
              </label>

              <input type="submit" value="Log In" />
            </form>
            <p>{message}</p>
          </div>
          <div className='login-box'>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
