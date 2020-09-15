import React, { Component } from 'react'
import ApiHelper from '../../ApiHelper/ApiHelper'

class UserPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        userInQuestion: {}
      }
  }

  componentDidMount(props) {
    const authorMatch = props.authors.find(author => author.id === props.pageId)
    if (props.pageId === props.currentUser.id) {
      this.setState({ userInQuestion: props.currentUser })
    } else if (authorMatch) {
      this.setState({ userInQuestion: authorMatch })
    } else {
      ApiHelper.getData('authors', props.pageId)
        .then(author => {
          props.addAuthor(author)
          this.setState({ userInQuestion: author })
        })
    }
  }
}

export default UserPage