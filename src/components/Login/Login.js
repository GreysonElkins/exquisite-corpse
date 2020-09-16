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
    } else if (!userCredentials[3].includes('@')) {
      this.setState({ error: "that's not an email"})
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
          this.setState({ redirect: true })
        } else {
          this.setState({ error: 'server'})
        }
      })
    }
  }

  displayError = () => {
    let warning = ''
    let error = this.state.error
    if (this.state.submitEmpty === true) {
      warning = `One or more fields are empty`
    } else if (error === "Incorrect login credentials") {
      warning = `We were unable to find a user with those credentials,`
    } else if (error === "bad passwords") {
      warning = `Those passwords don't match!`
    } else if (error === "server") {
      warning = 'Something went wrong,'
    } else if (error === "That's not an email,") {
      warning = error 
    } else if (error) {
      warning = 'That username and/or email is already taken,'
      // This isn't quite accurate, server should beable to get more specific
    }
    return (
      warning && (
      <h3 className="Login-warning-text">
        <p className="Login-warning-text">
          {warning}
          <br /> please try again!
        </p>
      </h3>
      )
    )
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
            this.props.signup ? this.verifySignup(event): this.verifyLogin(event);
          }}
        >
          <h3 className="Login-header">
            {this.props.signup ? "Sign Up" : "Login"}
          </h3>
          {this.displayError()}
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
              type="password"
              placeholder="Verify password"
              name="verifyPassword"
              id="verifyPassword"
              onChange={this.updateInputs}
            />
          )}
          {!this.props.signup 
            && <span className="sign-up-link">
              <Link to="/sign-up">Create an Account</Link>
            </span>
          }
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
