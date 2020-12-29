import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { store } from "../reducers";
import { Provider } from "react-redux";

import Signup from "./auth/Signup";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Signup />
      </Router>
    </Provider>
  );
}

export default App;
