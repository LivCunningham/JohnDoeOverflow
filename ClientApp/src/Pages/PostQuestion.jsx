import React, { Component } from 'react'
import './PostQuestion.css'
import axios from 'axios'

class PostQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {}
    }
  }

  //add new question post
  updateValue = event => {
    const state = this.state
    state.question[event.target.name] = event.target.value
    this.setState(state)
  }

  //submit form
  submitNewQuestion = event => {
    event.preventDefault()
    axios.post('/api/questions', this.state.question)
  }

  render() {
    return (
      <section className="Post">
        <div className="question-post">
          <h2 className="Post-Title">POST YOUR QUESTION BELOW</h2>
          <form className="input-Q" onSubmit={this.submitNewQuestion}>
            <input
              className="title-input"
              type="text"
              placeholder="Hey, JohnDoe! What's your question? Be specific. "
              name="title"
              onChange={this.updateValue}
            />
            <textarea
              className="text-area"
              rows="10"
              cols="150"
              onChange={this.updateValue}
              placeholder="Tell us more about your question here..."
              name="description"
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
