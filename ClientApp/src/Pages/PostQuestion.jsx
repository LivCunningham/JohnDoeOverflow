import React, { Component } from 'react'
import './PostQuestion.css'

class PostQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  //add new question post
  addNewQuestion = event => {
    this.setState({ value: event.target.value })
  }

  //submit form
  submitNewQuestion = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <section className="Post">
        <div className="question-post">
          <h2>POST YOUR QUESTION BELOW</h2>
          <form className="input-Q">
            <input
              className="title-input"
              type="text"
              placeholder="Hey, JohnDoe! What's your question? Be specific. "
              onChange={this.addNewQuestion}
              value={this.state.value}
            />
            <textarea
              className="text-area"
              rows="10"
              cols="150"
              onChange={this.addNewQuestion}
              value={this.state.value}
              placeholder="Tell us more about your question here..."
            />
            <button className="submit-Q">
              <h3>Submit</h3>
            </button>
          </form>
        </div>
      </section>
    )
  }
}

export default PostQuestion
