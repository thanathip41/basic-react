import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.auth = true
  }
  render() {
   
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">Navbar</a>
        <div className="d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link"> Create </Link>
            </li>

            <li className="nav-item">
              <Link to="/example" className="nav-link"> Example </Link>
            </li>
            <li className="nav-item dropdown">
               <div className="btn-group dropstart">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Dropdown    </a>           
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                  <li><a className="dropdown-item" href="#">Menu item</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}
export default Nav