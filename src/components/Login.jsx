import React, { Component } from "react";
import styles from "Components/css/login.css";
//import axios from "axios";
//import Auth from "Components/Auth";
import { connect } from "react-redux";
import { login } from "Redux/actions/authActions";
import validateInput from './validations/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    
    return true;
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.props.history.push('/'),
        (err) => this.setState({ isLoading: false })
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="login-wrapper columns">
        <div className="column is-8 is-hidden-mobile hero-banner">
          <section className="hero is-fullheight is-dark">
            <div className="hero-body">
              <div className="container section">
                <div className="has-text-right">
                  <h1 className="title is-1">Login</h1> <br />
                  <p className="title is-3">Secure User Account Login</p>
                </div>
              </div>
            </div>
            <div className="hero-footer">
              <p className="has-text-centered">
                Image © Glenn Carstens-Peters via unsplash
              </p>
            </div>
          </section>
        </div>
        <div className="column is-4">
          <section className="hero is-fullheight">
            <div className="hero-heading">
              <div className="section has-text-centered">
                <img
                  src="http://bulma.io/images/bulma-logo.png"
                  alt="Bulma logo"
                  width="150px"
                />
              </div>
            </div>
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <h1 className="avatar has-text-centered section">
                      <img src="https://placehold.it/128x128" />
                    </h1>
                    <form className="login-form" onSubmit={this.onSubmit}>
                      <p className="control has-icon has-icon-right">
                        <input
                          className="input email-input"
                          type="text"
                          name="email"
                          onChange={this.onChange}
                          placeholder="jsmith@example.org"
                        />
                        <span className="icon user">
                          <i className="fa fa-user" />
                        </span>
                      </p>
                      <p className="control has-icon has-icon-right">
                        <input
                          className="input password-input"
                          type="password"
                          name="password"
                          onChange={this.onChange}
                          placeholder="●●●●●●●"
                        />
                        <span className="icon user">
                          <i className="fa fa-lock" />
                        </span>
                      </p>
                      <p className="control login">
                        <button
                          className="button is-success is-outlined is-large is-fullwidth"
                          onClick={this.postLogin}
                        >
                          Login
                        </button>
                      </p>
                    </form>
                    <div className="section forgot-password">
                      <p className="has-text-centered">
                        <a href="#">Forgot password</a>
                        <a href="#">Need help?</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(LoginForm);
