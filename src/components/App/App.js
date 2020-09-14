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
              story.prompt = this.state.prompts
                .find(prompt => prompt.id === story.prompt)
            }
            updatedStories.push(story)
          })
          this.setState({ stories: updatedStories })
        })
      })
  }

  updateContributorData = (story) => {
    
      story.contributors.forEach((contributor, i) => {
        const existingAuthor = this.state.authors
          .find(author => author.id === contributor)
        if (existingAuthor) {
          story.contributors[i] = existingAuthor
        } else {
          ApiHelper.getData('authors', contributor)
            .then(author => {
              const allAuthors = this.state.authors.concat(author)
              story.contributors[i] = author
              this.setState({ authors: allAuthors })
            })
        }
      })
    this.updateStoryData(story)
  }

  updateStoryData = (newStory) => {
    debugger
    const allStoriesCopy = this.state.stories
    const withNewStory = allStoriesCopy.map(oldStory => {
      if (newStory.id === oldStory.id) {
        return newStory
      } else {
        return oldStory
      }
    })
    this.setState({stories: withNewStory})
  }

  incompleteStories = () => {
    return this.state.stories.filter(story => !story.is_complete)
  }
  
  completedStories = () => {    
    return this.state.stories.filter(story => story.is_complete)
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
            return (
              <LibraryView 
                stories={this.completedStories()}
                authorUpdater={this.updateContributorData} 
              />
            ) 
          }}
        />
      </main>
    )
  }
}

export default App;
