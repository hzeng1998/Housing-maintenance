import React, { Component } from 'react';
import Home from './page/HomePage'
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./page/Login";
import SignInStart from "./page/SignInStart";
import Register from "./page/Register";
import AddHouse from "./page/AddHouse";
import HouseInfo from "./page/HouseInfo";
import HouseFile from "./page/HouseFile";
import Device from "./page/Device";
import HouseBase from './components/HouseBase';
import SettingResult from "./page/SettingResult";
import OrderResult from "./components/OrderResult";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <CssBaseline/>
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/signup"} component={SignInStart}/>
            <Route path={"/register/:email"} component={Register}/>
            <Route path={"/addhouse"} component={AddHouse}/>
            <Route path={"/houseinfo"} component={HouseInfo}/>
            <Route path={"/housefile"} component={HouseFile}/>
            <Route path={"/device"} component={Device}/>
            <Route path={"/house"} component={HouseBase}/>
            <Route path={"/house/maintain/result"} component={OrderResult}/>
            <Route exact path={"/setting/result"} component={SettingResult}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
