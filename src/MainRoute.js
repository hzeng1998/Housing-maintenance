import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Base from './components/HouseBase';
import HomePage from './components/HomePage';

class MainRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path="/app" component={Base}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRoute;