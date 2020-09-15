import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import WelcomePageView from '../WelcomePageView/WelcomePageView'
import StorySetupView from '../StorySetupView/StorySetupView'
import StoryEditView from '../StoryEditView/StoryEditView'
import LibraryView from '../LibraryView/LibraryView'
import Login from '../Login/Login'

class App extends Component {
  constructor() {
    super()
      this.state = {
        loggedIn: false,
      }
  }
  render() {
    return (
      <main>
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
            return <Login /> 
          }}
        /> 
      </main>
    )
  }
}

export default App;
