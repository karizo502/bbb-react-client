import React, { Component } from "react";

const imgStyle = {
    'width' : '48px',
    'height' : '48px',
    'border-radius': '100px',
    'padding': '2px',
    'border': '1px solid #dbdbdb'
}

export default class extends Component {
  render() {
    return (
      <div className="">
      <br />
        <article className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={this.props.user.image_path} style={imgStyle} alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.user.name}</strong>{" "}
                <small>@{this.props.user.email}</small>
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
