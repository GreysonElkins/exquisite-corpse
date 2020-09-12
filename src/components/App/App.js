import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import WelcomePageView from '../WelcomePageView/WelcomePageView'
import StorySetupView from '../StorySetupView/StorySetupView'
import StoryEditView from '../StoryEditView/StoryEditView'
import LibraryView from '../LibraryView/LibraryView'
import PublishedStoryView from '../PublishedStoryView/PublishedStoryView'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main>
        <Route 
          exact path='/' 
          render={ () => {
            return <WelcomePageView /> 
          }}
        />
        {/* <Route 
          exact path='/story-setup' 
          render={ () => {
            return <StorySetupView /> 
          }}
        />
        <Route 
          exact path='/story-edit' 
          render={ () => {
            return <StoryEditView /> 
          }}
        />  
        <Route 
          exact path='/library' 
          render={ () => {
            return <LibraryView /> 
          }}
        />
        <Route 
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