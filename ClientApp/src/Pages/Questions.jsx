import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Questions(props) {
  const [question, setQuestion] = useState({})
  const [postAsnwer, setpostAsnwer] = useState({})
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
      // setAnswers({
      //   answers: resp.data.answers,
      //   aVoteCount: resp.data.voteCount
      // })
    })
  }, [])

  useEffect(() => {
    Axios.get(`https://localhost:5001/api/answers/${qID}`).then(resp => {
      console.log({ resp })
      setAnswers(resp.data)
    })
  }, [])

  const upvote = () => {
    Axios.put(`/api/answers/voteA/${qID}`)
    answers.aVoteCount = answers.VoteCount + 1
  }

  const downvote = () => {
    Axios.put(`/api/answers/voteA/${qID}`)
    answers.VoteCount = answers.VoteCount + 1
  }

  //add new answer post
  updateValue = event => {
    answers.setpostAsnwer[event.target.name] = event.target.value
  }

  const submitAnswer = e => {
    e.preventDefault()
    Axios.post('/api/answers')
  }

  return (
    <section>
      <div className="Post">
        <h1>{question.title}</h1>
        <p>{question.description}</p>
        <form onSubmit={() => submitAnswer()}>
          <textarea
            className="text-area"
            rows="8"
            cols="100"
            placeholder="Answer this question"
            name="description"
            onChange={updateValue}
          />
          <button>Submit</button>
        </form>
        {/* <div>
          {answers.map(answer => {
            return (
              <div>
                <div>{answer.description}</div>
                <button onClick={() => upvote()}>UpVote</button>
                <button onClick={() => downvote()}>DownVote</button>
              </div>
            )
          })}
        </div> */}
      </div>
      <ul className="answer-list">
        {answers.map(index => {
          return (
            <li key={index}>
              <p>{index.description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
