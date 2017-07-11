import React, { Component } from "react";

export default class extends Component {
  render() {
    return (<div className="box">
   
             <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.event.image_path} alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.event.event_name}</strong> <small>@{this.props.event.creator}</small> 
                    <br />
                    <small >{this.props.event.postdate}</small>
                  </p>
                </div>
              </div>
            </article>
            <article className="media">
              <div className="media-content">
                <div className="content">
                <img src={this.props.event.image_path} alt="Image" />
                  <p>  {this.props.event.detail}</p>
                </div>
                <nav className="level">
                  <div className="level-left">
                    <a className="level-item">
                      <span className="icon is-small"><i className="fa fa-reply"></i></span>
                    </a>
                    <a className="level-item">
                      <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                    </a>
                    <a className="level-item">
                      <span className="icon is-small"><i className="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
            </div>)
  }
}
