import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Logo title="Journeyman" subtitle="Adventures in code and other interesting places"/>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="" className="nav-link">Home</Link>                        
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">About me</Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">My Projects</Link>
          </li>          
        </ul>
      </nav>
    )
  }
}
export default NavBar;