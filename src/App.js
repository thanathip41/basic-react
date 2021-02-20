import React, { Component } from 'react'

import Router from './routes'
import Nav  from './components/_Html/Nav'

export default class App extends Component {
  render() {
    return (
      
      <div className="my-app">
         <Nav/>
        <div className="container">
          <section className="section">
            <div className="container">
              <Router />
            </div>
          </section>
        </div>
      </div>
    )
  }
}