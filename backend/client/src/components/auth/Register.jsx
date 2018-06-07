import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router"

class Register extends React.Component {
  state = {
    emailInput: '',
    fullNameInput: '',
    usernameInput: '',
    passwordInput: '',
    confirmInput: '',
    message: '',
    registered: false
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm = e => {
    e.preventDefault();
    const { usernameInput, passwordInput, confirmInput, emailInput, fullNameInput, registered } = this.state;
    if (!usernameInput || !passwordInput || !confirmInput || !emailInput || !fullNameInput) {
      this.setState({
        passwordInput: '',
        confirmInput: '',
        message: 'Please complete all required fields'
      })
      return;
    }
    if (passwordInput.length <= 7) {
      this.setState({
        passwordInput: '',
        confirmInput: '',
        message: 'Password length must be at least 8 characters'
      });
      return;
    }
    if (passwordInput !== confirmInput) {
      this.setState({
        passwordInput: '',
        confirmInput: '',
        message: 'Passwords do not match!'
      });
      return;
    }
    axios
    .post('/users/register', {
      username: usernameInput,
      password: passwordInput,
      email: emailInput,
      full_name: fullNameInput
    })
    .then(res => {
      console.log(res.data);
      this.setState({
        registered: true,
        message: `Welcome to the site ${this.state.usernameInput}`
      });
    })
    .catch(err => {
      console.log('error: ', err);
      this.setState({
        usernameInput: '',
        passwordInput: '',
        confirmInput: '',
        emailInput: '',
        usernameInput: '',
        message: 'Error inserting user'
      });
    });

  };

  render() {
    const { emailInput, fullNameInput, usernameInput, passwordInput, confirmInput, message, registered } = this.state;
    const { submitForm, handleEmailChange, handleFullNameChange, handleUsernameChange } = this;
    if (registered) {
      axios
        .post('/users/login', {
          username: usernameInput,
          password: passwordInput
        })
        .then(res => {
          this.setState({
            message: 'success'
          });
        })
        .catch(err => {
          this.setState({
            message: 'username/password not found'
          });
        });
      return <Redirect to='/user' />
    }
    return (
      <div className='backdrop' >
        <div class='auth-container'>
          <div class='auth-box'>
            <form onSubmit={submitForm}>
              <h1>BookMark</h1>
              <h3>Sign up and BookMark your favorite media</h3>
              <label>
                <input
                  type='text'
                  name='Email'
                  placeholder='Email'
                  value={emailInput}
                  onChange={handleEmailChange}
                />
              </label>
              <label>
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  value={usernameInput}
                  onChange={handleUsernameChange}
                />
              </label>
              <label>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={passwordInput}
                  onChange={this.handlePasswordChange}
                />
              </label>
              <label id='confirm'>
                <input
                  type='password'
                  name='confirm-input'
                  placeholder='Confirm Password'
                  value={confirmInput}
                  onChange={this.handleConfirmChange}
                />
              </label>
              <input type='submit' value='Sign Up' />
            </form>
            <p>{message}</p>
          </div>
          <div class='login-box'>
            Have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div >
    );
  }
}

export default Register;
