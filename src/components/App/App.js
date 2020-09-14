import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import WelcomePageView from '../WelcomePageView/WelcomePageView'
import StorySetupView from '../StorySetupView/StorySetupView'
import StoryEditView from '../StoryEditView/StoryEditView'
import LibraryView from '../LibraryView/LibraryView'
import mainBackground from '../../assets/backgrounds/mainBackground.jpg'

class App extends Component {
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
