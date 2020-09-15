import React, { Component } from 'react';
import './App.scss';
import '../GameHistory/GameHistory.scss'
import { Route, Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import WelcomePageView from '../WelcomePageView/WelcomePageView'
import StorySetupView from '../StorySetupView/StorySetupView'
import StoryEditView from '../StoryEditView/StoryEditView'
import LibraryView from '../LibraryView/LibraryView'
import Login from '../Login/Login'
import ApiHelper from '../../ApiHelper/ApiHelper'
import mainBackground from '../../assets/backgrounds/mainBackground.jpg'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      error: '',
      currentUser: {},
      stories: [],
      prompts: [],
      authors: [],
      hover: {show: false}
    }
  }

  componentDidMount() {
    try {
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
              if (story.contributions[0] !== null) {
                const lastEntry = story.contributions[story.contributions.length - 1];
                story.lastWords = `. . . ${lastEntry.slice(-150)}`;
              }
              updatedStories.push(story)
            })
            this.setState({ stories: updatedStories })
          })
        })
    } catch (error) {
      this.setState({error: error})
    }
  }
  
  login = (user) => {
    this.setState({ currentUser: user})
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
    const withNewStory = this.state.stories.map(oldStory => {
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

  addStory = (story) => {
    const newStories = [...this.state.stories, story]
    this.setState({
      stories: newStories
    })
  }

  toggleHover = (event, info) => {
    info ? this.setState({ hover: info }) : this.setState({ hover: {show: false} })
  }

  makeHover = () => {
    return (
      <div className="book-hover">
        <p>  
          <span>
            TITLE: {this.state.hover.title}
          <br/>
          </span>
          {this.state.hover.prompt 
            && <span>
              PROMPT: {this.state.hover.prompt.prompt}
              <br />
            </span>
          }
          <span>
            LAST WORDS: {this.state.hover.lastWords}
            <br />
          </span>
          <span>
            LAST UPDATED: {this.state.hover.lastUpdate}
          </span>
        </p>
      </div>
    )
  }

  render() {
    return (
      <main className="App">
        <img
          className="background"
          src={mainBackground}
          alt="Parchment Manuscript paper"
        />
        <Header />
        {this.state.error && (
          <h2>
            I'm sorry, we are having some trouble. <br />
            Error Status: {this.state.error.status}
          </h2>
        )}
        <Route
          exact
          path="/"
          render={() => {
            return (
              <WelcomePageView
                author={this.state.currentUser}
                stories={this.incompleteStories()}
                authorUpdater={this.updateContributorData}
                addStory={this.addStory}
                updateStoryData={this.updateStoryData}
                toggleHover={this.toggleHover}
              />
            );
          }}
        />
        <Route exact path="/story-setup">
          {!this.state.currentUser.name ? (
            <Redirect to="login" />
          ) : (
            <StorySetupView
              prompts={this.state.prompts}
              author={this.state.currentUser}
              addStory={this.addStory}
              updateStoryData={this.updateStoryData}
            />
          )}
          );
        </Route>
        <Route exact path="/story-edit">
          {!this.state.currentUser.name ? (
            <Redirect to="login" />
          ) : (
            <StoryEditView
              updateStoryData={this.updateStoryData}
              addStory={this.addStory}
              author={this.state.currentUser}
            />
          )}
        </Route>
        <Route
          exact
          path="/library"
          render={() => {
            return (
              <LibraryView
                stories={this.completedStories()}
                authorUpdater={this.updateContributorData}
                toggleHover={this.toggleHover}
              />
            );
          }}
        />
        <Route
          exact
          path="/login"
          render={() => {
            return <Login login={this.login} />;
          }}
        /> 
        <Route 
          exact path='/sign-up'
          render={() => {
            return <Login
              signup={true}
              login={this.login}
            />
          }}
        />
        <span>
          {this.state.hover.show && this.makeHover()}
        </span>
      </main>
    );
  }
}

export default App;
