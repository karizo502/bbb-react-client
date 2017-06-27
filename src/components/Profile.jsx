import React, { Component } from "react";
import styles from "Components/css/profile.css";

export default class extends Component {
  render() {
    return (<section className="section main">
      <div className="container profile">
        <div className="section profile-heading">
          <div className="columns">
            <div className="column is-2">
              <div className="image is-128x128 avatar">
                <img src="https://placehold.it/256x256" />
              </div>
            </div>
            <div className="column is-4 name">
              <p>
                <span className="title is-bold">John Smith</span>
                <span className="button is-primary is-outlined follow">
                  Follow
                </span>
              </p>
              <p className="tagline">
                The users profile bio would go here, of course. It could be two
                lines
              </p>
            </div>
            <div className="column is-2 followers has-text-centered">
              <p className="stat-val">129k</p>
              <p className="stat-key">followers</p>
            </div>
            <div className="column is-2 following has-text-centered">
              <p className="stat-val">2k</p>
              <p className="stat-key">following</p>
            </div>
            <div className="column is-2 likes has-text-centered">
              <p className="stat-val">29</p>
              <p className="stat-key">likes</p>
            </div>
          </div>
        </div>
        <div className="profile-options">
          <div className="tabs is-fullwidth">
            <ul>
              <li className="link is-active">
                <a>
                  <span className="icon"><i className="fa fa-list" /></span>{" "}
                  <span>My Lists</span>
                </a>
              </li>
              <li className="link">
                <a>
                  <span className="icon"><i className="fa fa-heart" /></span>{" "}
                  <span>My Likes</span>
                </a>
              </li>
              <li className="link">
                <a>
                  <span className="icon"><i className="fa fa-th" /></span>{" "}
                  <span>My Posts</span>
                </a>
              </li>
              <li className="link">
                <a>
                  <span className="icon"><i className="fa fa-bookmark" /></span>{" "}
                  <span>My Bookmarks</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>);
  }
}
