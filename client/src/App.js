import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Employees from "./components/Employees/Employees";
import store from "./store";

require("dotenv").config();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Employees} />
            <Route path="/employees" component={Employees} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
