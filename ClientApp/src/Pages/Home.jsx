import React, { Component } from 'react'
import QuestionFeed from '../components/QuestionFeed.jsx'
import './HomeStyle.css'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        {/* <main className="Q-mapping" >
          {this.state.} */}
        <section className="Q-thread">
          <div className="Hero">
            <h3>John Doe's Top Questions</h3>
            <Link to="/Post">
              <button className="ask">Ask Question</button>
            </Link>
          </div>
        </section>
        <QuestionFeed />
        {/* </main> */}
      </div>
    )
  }
}

export default Home
