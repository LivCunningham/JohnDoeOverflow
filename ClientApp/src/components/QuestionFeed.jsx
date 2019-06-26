import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class QuestionFeed extends Component {
  render() {
    return (
      <div>
        <ul className="feed">
          <li className="list">
            <Link to="/Post">
              <h2>Q-title</h2>
            </Link>
            <button className="vote">vote</button>
            <button className="answers">answers</button>
            <p className="brief-description">
              Sun bathe. Stand with legs in litter box, but poop outside roll
              over and sun my belly so mesmerizing birds yet and sometimes
              switches in french and say "miaou" just because well why not or
              under the bed lick butt and make a weird face but eat plants,
              meow, and throw up because i ate plants.
            </p>
          </li>
        </ul>
      </div>
    )
  }
}

export default QuestionFeed
