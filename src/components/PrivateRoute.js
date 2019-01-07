import React, { Component } from 'react';
import './App.css';
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={
    props => sessionStorage.getItem("__content_token") ?
      (<Component {...props}/>) :
      (<Redirect to={{pathname: "/login", state: {from: props.location}}}/>)
  }/>
);

export default PrivateRoute;