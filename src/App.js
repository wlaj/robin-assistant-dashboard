import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Edit from './screens/Edit';
import Create from './screens/Create';
import Show from './screens/Show';
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";

import Login from './screens/Login';
import Signup from "./screens/Signup";

import { auth } from './Firebase';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }

  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute path="/dashboard" authenticated={this.state.authenticated} component={Dashboard}></PrivateRoute>
          <PrivateRoute path="/edit/:id" authenticated={this.state.authenticated} component={Edit}></PrivateRoute>
          <PrivateRoute path="/create" authenticated={this.state.authenticated} component={Create}></PrivateRoute>
          <PrivateRoute path="/show/:id" authenticated={this.state.authenticated} component={Show}></PrivateRoute>
          <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
        </Switch>

      </Router>
    );
  }
}

export default App;
