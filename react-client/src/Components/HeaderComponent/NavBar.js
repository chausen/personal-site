import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <ul className="nav">
          <li className="nav-item">
            <Link to="" className="nav-link">Home</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
export default NavBar;