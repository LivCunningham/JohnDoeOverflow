import React, { Component } from 'react'
import './PostQuestion.css'

class PostQuestion extends Component {
  render() {
    return (
      <div>
        <h2>POST YOUR QUESTION </h2>
        <form>
          <input
            className="title-input"
            type="text"
            placeholder="Hey, JohnDoe! What's your question? Be specific. "
          />
          <textarea className="text-area" rows="8" cols="150">
            Tell us more about your question here...
          </textarea>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostQuestion
