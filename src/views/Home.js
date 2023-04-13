import React, { Component } from 'react'

export default class Home extends Component {
  
  render() {
    return (
      <div>
        <h1 class='title'>Welcome to my Harry Potter website</h1>
        <h2>{this.props.age}</h2>
        <button onClick={this.props.addOne}>Happy Birthday</button>
      </div>
    )
  }
}
    
    

   
