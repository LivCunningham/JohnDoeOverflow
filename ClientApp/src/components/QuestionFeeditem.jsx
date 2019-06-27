import React, { Component } from 'react'

class QuestionFeedItem extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.datePosted}</p>
        <p>{this.props.voteCount}</p>
      </div>
    )
  }
}

export default QuestionFeedItem
