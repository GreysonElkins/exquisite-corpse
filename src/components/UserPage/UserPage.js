import React, { Component } from 'react'
import ApiHelper from '../../ApiHelper/ApiHelper'
import moment from 'moment'
import Bookshelf from '../Bookshelf/Bookshelf'

class UserPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        userInQuestion: {},
        pageOwner: false
      }
  }

  componentDidMount() {
    const authorMatch = this.props.authors.find(author => author.id === this.props.pageId)
    if (this.props.pageId === this.props.currentUser.id) {
      this.setState({ userInQuestion: this.props.currentUser, pageOwner: true })
    } else if (authorMatch) {
      this.setState({ userInQuestion: authorMatch })
    } else {
      ApiHelper.getData('authors', this.props.pageId)
        .then(author => {
          this.props.addAuthor(author)
          this.setState({ userInQuestion: author })
        })
    }
  }

  makeEmailSection = () => {
    if (this.state.pageOwner) {
      return (
        <>
          <span class="email">this.state.userInQuestion.email</span>
          <span class="update">
            <button>Update email</button>
            <button>ChangePassword</button>
          </span>
        </>
      )
    }
  }

  makeBioSection = () => {
    let editTools = ''
    if (this.state.pageOwner) {
      editTools = <button>Update bio</button>
    } 
    return (
      <>
        <span className="about">
          ABOUT THE AUTHOR: 
            {this.state.userInQuestion.bio ? 
              this.state.userInQuestion.bio : `This author hasn't written about themselves yet`
            }
        </span>
        <span className="update">{editTools}</span>
      </>
    )
  }

  findAuthorStories() {
    debugger
    return this.props.stories.filter(story => {
      if (story.contributors.includes(this.state.userInQuestion.id)){
        return story
      } else if (story.contributors.includes(this.state.userInQuestion)) {
        return story
      }
    })
  }

  onBookClick = () => {

  }

  render() {
    return (
      <>
        <section className="authorInfo">
          <span className="authorName">{this.state.userInQuestion.name}</span>
          <span className="memberSince">
            {moment(this.state.userInQuestion.created_at).format('MMM YYYY')}
          </span>
          {this.makeEmailSection}
          {this.makeBioSection}
        </section>
        <Bookshelf 
          stories={this.findAuthorStories()}
          onClick={this.onBookClick}
          authorUpdater={this.props.authorUpdater}
          toggleHover={this.props.toggleHover}
        />
      </>
    )
  }
}

export default UserPage