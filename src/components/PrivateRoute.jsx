import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Route {
  render() {
    const component = super.render()
    if (this.props.isAuthenticated) {
      return component
    }
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: this.props.location }
        }}
      />
    )
  }
}

function mapStateToProps(state) {
  //console.log(state.event);
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, {})(PrivateRoute)
