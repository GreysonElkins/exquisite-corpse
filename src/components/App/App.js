import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import WelcomePageView from '../WelcomePageView/WelcomePageView'
import StorySetupView from '../StorySetupView/StorySetupView'
import StoryEditView from '../StoryEditView/StoryEditView'
import LibraryView from '../LibraryView/LibraryView'
import Login from '../Login/Login'
import mainBackground from '../../assets/backgrounds/mainBackground.jpg'

class App extends Component {
  constructor() {
    super()
      this.state = {
        isLoggedIn: false,
        currentUser: {}
      }
  }

  login = (user) => {
    this.setState({ isLoggedIn: true, currentUser: user})
  }

  render() {
    return (
      <main className='App'>
        <img className='background' src={mainBackground} alt='Parchment Manuscript paper' />
        <Header />
        <Route 
          exact path='/' 
          render={ () => {
            return <WelcomePageView /> 
          }}
        /> 
        <Route 
          exact path='/story-setup' 
          render={ () => {
            return <StorySetupView /> 
          }}
        />
        <Route 
          exact path='/story-edit' 
          render={ (props) => {
            return <StoryEditView {...props} /> 
          }}
        />  
        <Route 
          exact path='/library' 
          render={ () => {
            return <LibraryView /> 
          }}
        />
        <Route 
          exact path='/login' 
          render={ () => {
            return <Login 
              login={this.login}
            /> 
          }}
        /> 
      </main>
    )
  }
}

export default App;
