import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {

  render() {
    return (
      <div className="top-bar">
        <h1>Welcome to Ladies Emporium</h1>
        <nav>
          <ul className="nav nav-tabs">

            <li className="nav-item">
              <NavLink activeClassName="nav-link active" className="nav-link" to='/'>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName="nav-link active" className="nav-link" to='/items/makeup'>Makeup</NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName="nav-link active" className="nav-link" to='/items/hair'>Hair Care</NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName="nav-link active" className="nav-link" to='/items/skin'>Skin Care</NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName="nav-link active" className="nav-link"  to='/about'>About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName="nav-link active" className="nav-link" to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div>
          {this.props.children}
        </div>

      </div>
    );
  }

}

export default BaseLayout;
