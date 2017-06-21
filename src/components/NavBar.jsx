import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class extends Component {
  
  render() {
    return (<nav className="nav has-shadow">
    <div className="container">
      <div className="nav-left">
        <NavLink exact to="/" className="nav-item is-tab is-active"><i className="fa fa-home"></i> &nbsp; Home</NavLink>
        <NavLink to="/contact" className="nav-item is-tab"><i className="fa fa-bolt"></i> &nbsp; Moments</NavLink>
        <NavLink to="/foo" className="nav-item is-tab"><i className="fa fa-bell-o"></i> &nbsp; Notifications</NavLink>
        <NavLink to="/customers" className="nav-item is-tab"><i className="fa fa-envelope"></i> &nbsp; Messages</NavLink>
      </div>
      <div className="nav-right nav-menu">
        <span className="nav-item">
          <NavLink to="/login" >
          <a className="button" >
            <span className="icon">
              <i className="fa fa-lock"></i>
            </span>
            <span>Login</span>
          </a>
          </NavLink>
        </span>
      </div>
    </div>
  </nav>

      )
  }

  
}