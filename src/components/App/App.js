import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import WelcomePageView from ' ../WelcomePageView/WelcomePageView'
import StorySetupView from ' ../StorySetupView/StorySetupView'
import StoryEditView from ' ../StorySetupView/StorySetupView'
import LibraryView from '../LibraryView/LibraryView'
import PublishedStoryView from '../PublishedStoryView/PublishedStoryView'

function App() {
  return (
    <main>
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
      <Route 
        exact path='/published-story' 
        render={ () => {
          return <PublishedStoryView /> 
        }}
      />  
    </main>
  )
}

export default App;