import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Questions(props) {
  const [question, setQuestion] = useState({})
  const [answers, setAnswers] = useState([])
  const [voteCount, setVoteCount] = useState(0)
  const qID = props.match.params.id
  useEffect(() => {
    Axios.get(`api/questions/${qID}`).then(resp => {
      setQuestion({
        title: resp.data.title,
        description: resp.data.description,
        qVoteCount: resp.data.voteCount
      })
      setAnswers({
        answers: resp.data.answers,
        aVoteCount: resp.data.voteCount
      })
    })
  }, [])

  const upvote = () => {
    Axios.put(`/api/answers/voteA/${qID}`)
    answers.aVoteCount = answers.VoteCount + 1
  }

  const downvote = () => {
    Axios.put(`/api/answers/voteA/${qID}`)
    answers.aVoteCount = answers.VoteCount + 1
  }

  const submitAnswer = e => {
    e.preventDefault()
    Axios.post('/api/answers')
  }

  const updateValue = e => {
    const state = this.state
    state.question[e.target.name] = e.target.value
    this.setState(state)
  }

  return (
    <section className="Post">
      <div className="question-post">
        <h1>{question.title}</h1>
        <p>{question.description}</p>
        <form onSubmit={() => submitAnswer()}>
          <textarea
            className="text-area"
            rows="8"
            cols="100"
            onChange={() => updateValue()}
            placeholder="Answer this question"
            name="description"
          />
        </form>
        <div>
          {answers.map(answer => {
            return (
              <div>
                <div>{answer.description}</div>
                <button onClick={() => upvote()}>UpVote</button>
                <button onClick={() => downvote()}>DownVote</button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
