import React, { Component } from "react";
import { Route , Switch } from "react-router-dom";
import { PageNotFound } from "Components/Pages";
import { CustomerList, CustomerProfile } from "Components/Customers";
import Login from "Components/Login";
import Signup from "Components/Signup";
import Home from "Components/Home";
import Profile from "Components/Profile";
//import Auth from "Components/Auth";
import requireAuth from 'Redux/requireAuth';

export default class extends Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={requireAuth(Home)}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/customers" component={CustomerList} />
          <Route path="/customers/:id" component={CustomerProfile} />
          <Route path="/logout" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}
