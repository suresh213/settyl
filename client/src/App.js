import React, { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import store from "./store";

require("dotenv").config();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
      <Toaster position="bottom-right"/>
    </Provider>
  );
};

export default App;
