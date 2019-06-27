import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import Home from './Pages/Home.jsx'
import PostQuestion from './Pages/PostQuestion.jsx'
import Questions from './Pages/Questions.jsx'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/Post" component={PostQuestion} />
        <Route exact path="/questions/:id" component={Questions} />
      </Layout>
    )
  }
}
