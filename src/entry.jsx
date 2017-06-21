import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "Components/App";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("reactApp")
);

if (module.hot) {
  module.hot.accept();
}