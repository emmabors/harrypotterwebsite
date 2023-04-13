import React, { Component } from 'react'

export default class Characters extends Component {
    constructor(){
        super()
        this.state = {
            name: ''
        }
    }

    getCharacter = async () => {
      const response = await fetch('https://hp-api.onrender.com/api/characters')
      const data = await response.json()
      console.log(data)

      const potterName = data[0]['Harry Potter']

      this.setState({
        name: potterName
      })
    }

    componentDidMount = () => {
      this.getCharacter()
    }

    searchCharacters = (event) => {
      event.preventDefault()
      const potterName = event.target.potter.value
      this.getCharacter(potterName)
      console.log(potterName)
    }

    

    render() {
    return (
      <div>
        <h1>Characters Page</h1>
        <h1>{this.potterName}</h1>
        <form onSubmit={this.searchCharacters}>
          <input name ='potter' placeholder='Search a character'/>
          <button>Search</button>
        </form>
      </div>
    )
  }
}
