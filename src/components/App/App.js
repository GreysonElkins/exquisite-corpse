import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import WelcomePageView from '../WelcomePageView/WelcomePageView'
import StorySetupView from '../StorySetupView/StorySetupView'
import StoryEditView from '../StoryEditView/StoryEditView'
import LibraryView from '../LibraryView/LibraryView'
import ApiHelper from '../../ApiHelper/ApiHelper';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      stories: [],
      prompts: [],
      authors: []
    }
  }

  componentDidMount() {
    ApiHelper.getData('prompts')
      .then(allPrompts => {
        this.setState({prompts: allPrompts})

      })
      .then(() => {
        ApiHelper.getData('stories').then(allStories => {
          const updatedStories = []
          allStories.forEach(story => {
            if (story.prompt) {
              story.prompt = this.state.prompts.find(prompt => prompt.id === story.prompt)
            }
            updatedStories.push(story)
          })
          this.setState({ stories: updatedStories })
        })
      })
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
