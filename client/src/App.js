import React, { Fragment, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

require("dotenv").config();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Switch></Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;