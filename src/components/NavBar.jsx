import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "Redux/actions/authActions";

class Navbar extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const { user } = this.props.auth;
    //console.log(user.email)
    return (
      <nav className="nav has-shadow is-success">
        <div className="container">
          <div className="nav-left">
            <span className="nav-item">
              <img
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma logo"
              />
            </span>
            <span className="nav-item">
            <p claclassNames="control has-addons searchbox">
              <input className="input" type="text" placeholder="Search Wingkan" />
                <a class="button is-dark"> &nbsp; <i className="fa fa-search"></i> &nbsp;</a>
             </p>
              </span>
          </div>
            {isAuthenticated
              ? <div className="nav-right">
                <NavLink exact to="/" className="nav-item is-tab">
                  <i className="fa fa-home" /> &nbsp; Home
                </NavLink>
                <NavLink to="/profile" className="nav-item is-tab">
                  <i className="fa fa-user" /> &nbsp; Profile
                </NavLink>
                <span className="nav-item">

                  <a className="button" onClick={this.logout.bind(this)}>
                    <span className="icon">
                      <i className="fa fa-lock" />
                    </span>
                    <span>Logout</span>
                  </a>

                </span>
              </div>
              : <div className="nav-right">

                <span className="nav-item">
                  <NavLink to="/login" className="button">

                    <span className="icon">
                      <i className="fa fa-lock" />
                    </span>
                    <span>login</span>

                  </NavLink>
                </span>
                <span className="nav-item">
                  <NavLink to="/signup" className="button">

                    <span className="icon">
                      <i className="fa fa-lock" />
                    </span>
                    <span>signup</span>

                  </NavLink>
                </span>
              </div>}

          </div>
      </nav>
        );
  }
}
Navbar.propTypes = {
          auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
          auth: state.auth
  };
}

export default connect(mapStateToProps, {logout})(Navbar);
