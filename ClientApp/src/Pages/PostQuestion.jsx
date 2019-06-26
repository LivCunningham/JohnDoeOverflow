import React, { Component } from 'react'
import './PostQuestion.css'

class PostQuestion extends Component {
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
            />
            <textarea className="text-area" rows="10" cols="150">
              Tell us more about your question here...
            </textarea>
            <button className="submit-Q">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default PostQuestion
