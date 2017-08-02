import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {

  render() {
    return (
      <div>
        <h1>BaseLayout</h1>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/items/makeup'>Makeup</NavLink></li>
            <li><NavLink to='/items/hair'>Hair Care</NavLink></li>
            <li><NavLink to='/items/skin'>Skin Care</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
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
