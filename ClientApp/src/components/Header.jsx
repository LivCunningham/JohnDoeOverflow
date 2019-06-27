import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <section className="Q-thread">
          <div className="Hero">
            <h3>John Doe's Top Questions</h3>
            <Link to="/Post">
              <button className="ask">Ask Question</button>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}

export default Header
