import React from 'react'

export default class App extends React.Component{

  state = {
    people: []
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(persons => {
      this.setState({
        people: persons.people
      })
    })
  }
  render(){
    return(
      <div>
        {this.state.people.map(person => <div>{person.name}</div>)}
      </div>
    )
  }
}