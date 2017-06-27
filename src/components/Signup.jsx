import React, { Component } from "react";
import styles from "Components/css/login.css";
//import axios from "axios";
//import Auth from "Components/Auth";
import { connect } from "react-redux";
import { userSignupRequest } from "Redux/actions/signupActions";
import validateInput from './validations/signup';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      re_email: "",
      password: "",
      re_password: "",
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
      this.props.userSignupRequest(this.state).then(
        (res) => this.props.history.push('/'),
        (err) => this.setState({errors: err.response.data.errors, isLoading: false })
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
                    
                    <form className="login-form" onSubmit={this.onSubmit}>
                      <p className="control has-icon has-icon-right">
                        <input
                          className="input name-input"
                          type="text"
                          name="name"
                          onChange={this.onChange}
                          placeholder="name"
                        />
                        <span className="icon user">
                          <i className="fa fa-user" />
                        </span>
                      </p>
                      <p className="control has-icon has-icon-right">
                        <input
                          className="input email-input"
                          type="text"
                          name="email"
                          onChange={this.onChange}
                          placeholder="email"
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
                          placeholder="password"
                        />
                        <span className="icon user">
                          <i className="fa fa-lock" />
                        </span>
                      </p>
                      <p className="control has-icon has-icon-right">
                        <input
                          className="input password-input"
                          type="password"
                          name="re_password"
                          onChange={this.onChange}
                          placeholder="re-password"
                        />
                        <span className="icon user">
                          <i className="fa fa-lock" />
                        </span>
                      </p>
                      <p className="control login">
                        <button className="button is-success is-outlined is-large is-fullwidth" >
                          Signup
                        </button>
                      </p>
                    </form>
                    <div className="section forgot-password">
                      <p className="has-text-centered">
                        
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

export default connect(null, { userSignupRequest })(SignupForm);
