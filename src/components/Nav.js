import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div class='bar'>
        <ul className="nav justify-content-center">
         <li className="nav-item">
        <Link className="nav-link active" class='home' to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" class='characters' to="/characters">Find Characters</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" class='spells' to="#">Learn Spells</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" class='army' to="#">Dumbledore's Army</Link>
        </li>
        <li className="nav-item" class='login1'>
        <Link className="nav-link" class='login' to="#">Login</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" class='register' to="#"> Register</Link>
        </li>
        </ul>
        </div>
    )
  }
}
