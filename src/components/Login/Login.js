import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import { Redirect, Link } from 'react-router-dom';
import ApiHelper from '../../ApiHelper/ApiHelper';

class Login extends Component {
  constructor() {
    super()
      this.state = {
        username: '',
        password: '',
        verifyPassword: '',
        email: '',
        submitEmpty: false,
        redirect: false,
        error: ''
    }
  }

  updateInputs = (event) => {
    this.setState({ 
      [event.target.id]: event.target.value,
      error: '' 
    })

  }

  verifyLogin = async (event) => {
    event.preventDefault()
    
    if(this.state.username === '' || this.state.password === '') {
      this.setState({ submitEmpty: true })
    } else {
      const loginInfo = {
        "username": this.state.username, 
        "password": this.state.password
      }
      let response
      ApiHelper.postLogin(loginInfo)
        .then(res => {
          response = res
          return res.json()
        })
        .then(user => {
          if (response.status === 200) {
            this.props.login(user)
            this.setState({ redirect: true })
          } else {
            this.setState({ error: 'Incorrect login credentials'})
          }
        })
    }
  }

  verifySignup = async (event) => {
    event.preventDefault()
    
    const userCredentials = [
      this.state.password, 
      this.state.verifyPassword, 
      this.state.username, 
      this.state.email
    ]

    if(userCredentials.some(cred => cred === '')){
      this.setState({ submitEmpty: true })
    } else if (userCredentials[0] !== userCredentials[1]) {
      this.setState({ error: 'bad passwords'})
    } else {
      const newUser = {
        password: userCredentials[0],
        name: userCredentials[2],
        email: userCredentials[3]
      }
      let response
      ApiHelper.createUser(newUser).then(res => {
        response = res
        return res.json()
      })
      .then(createdUser => {
        if(response.status === 200) {
          this.props.login(createdUser)
          this.state({ redirect: true })
        } else {
          this.setState({ error: 'Something went wrong'})
        }
      })
    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>;
    }

    return (
      <div className="Login-container">
        <form
          className="Login-form"
          onSubmit={(event) => {
            this.verifyLogin(event);
            this.verifySignup(event);
          }}
        >
          <h3 className="Login-header">
            {this.props.signup ? "Sign Up" : "Login"}
          </h3>
          {this.state.submitEmpty === true && (
            <p className="Login-warning-text">One or more fields are empty</p>
          )}
          {this.state.error === "Incorrect login credentials" && (
            <p className="Login-warning-text">
              We were unable to find a user with those credentials,
              <br /> please try again!
            </p>
          )}
          {this.state.error === "bad passwords" && (
            <p className="Login-warning-text">
              Those passwords don't match!
              <br /> please try again!
            </p>
          )}
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            onChange={this.updateInputs}
          />
          {this.props.signup && (
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              id="email"
              onChange={this.updateInputs}
            />
          )}
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={this.updateInputs}
          />
          {this.props.signup && (
            <input
              type="verifyPassword"
              placeholder="Verify password"
              name="verifyPassword"
              id="verifyPassword"
              onChange={this.updateInputs}
            />
          )}
          <span className="sign-up-link">
            <Link to="/sign-up">Create an Account</Link>
          </span>
          <button className="login-button">/Submit/</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func
}

export default Login
