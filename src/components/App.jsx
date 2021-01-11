import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/reducer";

import Signup from "./auth/Signup";
import Login from "./auth/Login";
import General from "./main/General";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <General />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/login" render={() => <Login />} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
