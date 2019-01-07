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
import WarrantyResult from "./page/WarrantyResult";
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
            <PrivateRoute path={"/addhouse"} component={AddHouse}/>
            <Route path={"/register/:email"} component={Register}/>
            <PrivateRoute path={"/houseinfo"} component={HouseInfo}/>
            <PrivateRoute path={"/housefile"} component={HouseFile}/>
            <PrivateRoute path={"/device"} component={Device}/>
            <PrivateRoute exact path={"/setting/result"} component={SettingResult}/>
            <PrivateRoute path={"/house"} component={HouseBase}/>
            <PrivateRoute path={"/warranty/result"} component={WarrantyResult}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
