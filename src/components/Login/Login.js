import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import { Redirect } from 'react-router-dom';
import ApiHelper from '../../ApiHelper/ApiHelper';

class Login extends Component {
  constructor() {
    super()
      this.state = {
        username: '',
        password: '',
        submitEmptyLogin: false,
        redirect: false,
        error: ''
    }
  }

  updateInputs = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  verifyLogin = async (event) => {
    event.preventDefault()
    
    if(this.state.username === '' || this.state.password === '') {
      this.setState({ submitEmptyLogin: true })
    } else {
      const loginInfo = {
        "username": this.state.username, 
        "password": this.state.password
      }
      const response = await ApiHelper.postLogin(loginInfo)
      if (response.status === 200) {
        this.props.login(response)
        this.setState({ redirect: true })
      } else {
        this.setState({ error: 'Incorrect login credentials'})
      }
    }
  }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }

     console.log(this.state)

    return (
      <div className="Login-container">
        <form className="Login-form">
          <h3 className="Login-header">Login</h3>
          {this.state.submitEmptyLogin === true 
            && <p className="Login-warning-text" >
              One or more fields are empty
            </p>
          }
          {this.state.error === 'Incorrect login credentials'
            && <p className="Login-warning-text"> 
              We were unable to find a user with those credentials,
              <br /> please try again!
            </p>
          }
          <input
            type='text'
            placeholder='Username or Email'
            name='username'
            id='username'
            onChange={this.updateInputs}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            id='password'
            onChange={this.updateInputs}
          />
          <button 
            className="login-button" 
            onClick={this.verifyLogin}
          >
            /Submit/
          </button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func
}

export default Login
