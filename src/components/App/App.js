import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import WelcomePageView from '../WelcomePageView/WelcomePageView'
import StorySetupView from '../StorySetupView/StorySetupView'
import StoryEditView from '../StoryEditView/StoryEditView'
import LibraryView from '../LibraryView/LibraryView'

class App extends Component {
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
<<<<<<< HEAD
            return <StoryEditView {...props} /> 
=======
            return <StoryEditView {...props}/> 
>>>>>>> f0b4526adbc124e62b466b1bb6503e72bbd98bb7
          }}
        />  
        <Route 
          exact path='/library' 
          render={ () => {
            return <LibraryView /> 
          }}
        />
        {/* <Route 
          exact path='/published-story/:id' 
          render={ () => {
            return <PublishedStoryView /> 
          }}
        />  */}
      </main>
    )
  }
}

export default App;
