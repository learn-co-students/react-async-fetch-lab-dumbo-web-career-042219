import React, { Component } from 'react'

export class App extends Component {

    
    render() {
        return (
            <div>
                
            </div>
        )
    }


    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(data => {
            this.setState({
              peopleInSpace: data.people
            })
          })
      }




    }




export default App
