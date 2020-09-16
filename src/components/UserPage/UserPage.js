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
        userInQuestion: {id: null},
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
      this.setState({ pageOwner: true })
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
        let user = this.state.userInQuestion.id ? this.state.userInQuestion : this.props.currentUser
        let response
        ApiHelper.postAuthor(update, user.id)
          .then(res => {
            response = res
            return res.json()
          })
          .then(updatedUser => {
            if (response.status === 200) {
              this.setState({
                enableField: "",
                bio: "",
                password: "",
                email: "",
              });
              this.props.login(updatedUser[0])
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
    let user
    if (this.state.pageOwner) {
      user = this.state.userInQuestion.id ? this.state.userInQuestion : this.props.currentUser
      return (
        <>
          <span class="email">{user.email}</span>
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
    const user = this.state.userInQuestion.id ? this.state.userInQuestion : this.props.currentUser

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
          {user.bio
            ? user.bio
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
    const user = this.state.userInQuestion.id
      ? this.state.userInQuestion
      : this.props.currentUser;

    return this.props.stories.filter(story => {
      if (story.contributors.includes(user.id)){
        return story
      } else if (story.contributors.includes(user)) {
        return story
      }
    })
  }

  onBookClick = () => {

  }


  render() {
    const user = this.state.userInQuestion.id
      ? this.state.userInQuestion
      : this.props.currentUser;
    return (
      <section className="user-page-container">
        <img src={drawing1} alt="An exquisite corpse drawing"/>
        <section className="author-info">
          <span className="authorName">{user.name}</span>
          <span className="memberSince">
            Member Since: {moment(user.created_at).format('MMM YYYY')}
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