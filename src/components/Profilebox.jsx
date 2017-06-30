import React, { Component } from "react";
import { connect } from "react-redux";

class Profilebox extends Component {
  render() {
    const { user } = this.props.auth;
    console.log(user)
    return (<div className="card is-fullwidth">
            <header className="card-header">
            </header>
            <div className="card-content">
              <a className="card-avatar">
                <img src="https://www.heartlandhealthcenters.org/wp-content/themes/twentytwelve-child/images/user_default.png" className="card-avatar-img" />
              </a>

              <div className="card-user">
                <div className="card-user-name">
                  <a href="#">{user.name}</a>
                </div>
                <span>
                  <a href="#">@<span>{user.name}</span></a>
                </span>
              </div>

              <div className="card-stats">
                <ul className="card-stats-list">
                  <li className="card-stats-item">
                    <a href="#" title="9.840 Tweet">
                      <span className="card-stats-key">Tweets</span>
                      <span className="card-stats-val">1</span>
                    </a>
                  </li>
                  <li className="card-stats-item">
                    <a href="#/following" title="885 Following">
                      <span className="card-stats-key">Following</span>
                      <span className="card-stats-val">0</span>
                    </a>
                  </li>
                  <li className="card-stats-item">
                    <a href="#">
                      <span className="card-stats-key">Followers</span>
                      <span className="card-stats-val">0</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>)
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { })(Profilebox);