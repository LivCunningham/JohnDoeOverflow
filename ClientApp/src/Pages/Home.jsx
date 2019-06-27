import React, { useState, useEffect } from 'react'
import './HomeStyle.css'
import axios from 'axios'
import Header from '../components/Header'

export default function Home() {
  const [questions, setQuestion] = useState([])

  //question feed
  useEffect(() => {
    axios.get(`https://localhost:5001/api/questions`).then(resp => {
      console.log({ resp })
      setQuestion(resp.questions)
    })
  }, '')

  return (
    <div>
      <Header />
      <ul className="Question-feed" />
    </div>
  )
}
