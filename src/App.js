import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HouseBase from './components/HouseBase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HouseBase}/>
            <Route path="/house" component={HouseBase}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
