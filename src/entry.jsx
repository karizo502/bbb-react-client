import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from 'Redux/store'
import setAuthorizationToken from 'Redux/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import App from "Components/App";
import { setCurrentUser } from 'Redux/actions/authActions';


if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

render(
  <Provider store = { store }>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>,
  document.getElementById("reactApp")
);

if (module.hot) {
  module.hot.accept();
}
