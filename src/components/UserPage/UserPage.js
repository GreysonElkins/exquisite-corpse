import React, { Component } from 'react'
import ApiHelper from '../../ApiHelper/ApiHelper'
import moment from 'moment'
import Bookshelf from '../Bookshelf/Bookshelf'
import './UserPage.scss'

import drawing1 from '../../assets/drawing1.png'
import drawing2 from '../../assets/drawing2.png'
import drawing3 from '../../assets/drawing3.png'
import drawing4 from '../../assets/drawing4.png'
import drawing5 from '../../assets/drawing5.png'
import drawing6 from '../../assets/drawing6.png'

const drawings = [drawing1, drawing2, drawing3, drawing4, drawing5, drawing6]

class UserPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        userInQuestion: {},
        pageOwner: false,
        enableField: '',
        bio: '',
        password: '',
        email: '',
        error: ''
      }
  }

    updateInputs = (event) => {
      this.setState({ 
        [event.target.id]: event.target.value,
        error: '' 
      })
    }

  componentDidMount() {
    const authorMatch = this.props.authors.find(author => author.id === this.props.pageId)
    if (parseInt(this.props.pageId) === this.props.currentUser.id) {
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

  updateUser = () => {
    const update = { [this.state.enableField]: this.state[this.state.enableField] } 
    if (update[this.state.enableField] === '') {
      this.setState({ error: "You haven't entered anything!" })
    } else {
      try {
        let response
        ApiHelper.postAuthor(update, this.state.userInQuestion.id)
          .then(res => {
            response = res
            return res.json()
          })
          .then(updatedUser => {
            if (response.status === 200) {
              this.props.login(updatedUser)
            }
            else {
              this.setState({ error: 'Something went wrong!' })
            }
          })
      } catch {
        this.setState({ error: 'Something went wrong!'})
      }
    }
    
  }

  makeEmailSection = () => {
    if (this.state.pageOwner) {
      return (
        <>
          <span class="email">this.state.userInQuestion.email</span>
          {this.state.enableField === "email" && (
            <input
              type="email"
              placeholder="Enter a new e-mail address"
              name="email"
              id="email"
              onChange={this.updateInputs}
            />
          )}
          {this.state.enableField === "password" && (
            <input
              type="password"
              placeholder="Enter a new password"
              name="password"
              id="password"
              onChange={this.updateInputs}
            />
          )}
          <span class="update">
            <button
              onClick={() => {
                if (this.state.enableField === "email") {
                  this.updateUser()
                } else {
                  this.setState({ enableField: "email" });
                }
              }}
            >
              {this.state.enableField === "email" ? "Submit" : "Update E-mail"}
            </button>
            <button
              onClick={() => {
                if (this.state.enableField === "password") {
                  this.updateUser();
                } else {
                  this.setState({ enableField: "password" });
                }
              }}
            >
              {this.state.enableField === "password" ? "Submit" : "Change Password"}
            </button>
          </span>
        </>
      );
    }
  }

  makeBioSection = () => {
    let editTools = ''
    if (this.state.pageOwner) {
      editTools = (
        <button
          onClick={() => {
            if (this.state.enableField === "bio") {
              this.updateUser();
            } else {
              this.setState({ enableField: "bio" });
            }
          }}
        >
          {this.state.enableField === "bio" ? "Submit" : "Update Bio"}
        </button>
      );
    } 
    return (
      <>
        <span className="about">
          ABOUT THE AUTHOR: <br />
          {this.state.userInQuestion.bio
            ? this.state.userInQuestion.bio
            : `This author hasn't written about themselves yet`}
        </span>
        {this.state.enableField === "bio" && (
          <input
            type="bio"
            placeholder="Enter a new biography"
            name="bio"
            id="bio"
            onChange={this.updateInputs}
          />
        )}
        <span className="update">{editTools}</span>
      </>
    );
  }

  findAuthorStories() {
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
      <section className="user-page-container">
        <img src={drawing1} alt="An exquisite corpse drawing"/>
        <section className="author-info">
          <span className="authorName">{this.state.userInQuestion.name}</span>
          <span className="memberSince">
            Member Since: {moment(this.state.userInQuestion.created_at).format('MMM YYYY')}
          </span>
          {this.makeEmailSection()}
          {this.makeBioSection()}
          <h3>Contributions</h3>
          <Bookshelf 
            stories={this.findAuthorStories()}
            onClick={this.onBookClick}
            authorUpdater={this.props.authorUpdater}
            toggleHover={this.props.toggleHover}
          />
        </section>
      </section>
    )
  }
}

export default UserPage