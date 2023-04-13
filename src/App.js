import './App.css';
import Nav from'./components/Nav'
import Home from './views/Home'
import Characters from './views/Characters'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      age: 101
    }
  }

  addOne = () => {
    console.log('button clicked')
    this.setState({
      age: this.state.age + 1
    })
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home age={this.state.age} addOne={this.addOne}/>}/>
            <Route path='/characters' element={<Characters/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}


