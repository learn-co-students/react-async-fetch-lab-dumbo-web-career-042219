// create your App component here
import React, { Component } from 'react'

const API = 'http://api.open-notify.org/astros.json'

export default class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        people: data
      })
    })
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
