import React, { useState, useEffect } from 'react'
import './HomeStyle.css'
import axios from 'axios'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Home() {
  const [questions, setQuestion] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  //question feed
  useEffect(() => {
    axios.get(`https://localhost:5001/api/questions`).then(resp => {
      console.log({ resp })
      setQuestion(resp.data)
    })
  }, [])

  const search = e => {
    e.preventDefault()
    axios.get('/api/search?searchTerm=' + searchTerm).then(resp => {
      setQuestion(resp.data)
    })
  }

  return (
    <div>
      <Header />
      <form onSubmit={search}>
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      <ul className="Question-feed">
        {questions.map(index => {
          return (
            <li key={index}>
              <Link to={`/questions/${index.id}`}>
                <h2>{index.title}</h2>
              </Link>
              <div className="vote">
                <button class="up-vote">˄</button>
                <button class="down-vote">˅</button>
              </div>
              <time className="Date-Posted" datetime={index.datePosted}>
                <span class="day">4</span>
                <span class="month">Jul</span>
                <span class="year">2014</span>
                <span class="time">ALL DAY</span>
              </time>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
