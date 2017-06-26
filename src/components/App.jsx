import React, { Component } from "react";
import Routes from "Components/Routes";
import NavBar from "Components/NavBar"

export default class extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavBar />
        <Routes /> 
      </div>
    );
  }
}

