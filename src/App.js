import React, { Component } from 'react';
import Home from './page/HomePage'
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./page/Login";
import SignInStart from "./page/SignInStart";
import Register from "./page/Register";
import AddHouse from "./page/AddHouse";
import HouseInfo from "./page/HouseInfo";
import HouseFile from "./page/HouseFile";
import AddDevice from "./page/AddDevice";
import HouseBase from './components/HouseBase';
import SettingResult from "./page/SettingResult";
import OrderResult from "./components/OrderResult";
import PrivateRoute from "./components/PrivateRoute";
import HouseList from "./page/HouseList";
import OrderList from "./components/OrderList";

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

            <PrivateRoute path={"/addhouse"} component={AddHouse}/>
            <PrivateRoute path={"/houseinfo"} component={HouseInfo}/>
            <PrivateRoute path={"/housefile"} component={HouseFile}/>
            <PrivateRoute path={"/adddevice"} component={AddDevice}/>
            <PrivateRoute path={"/house"} component={HouseBase}/>
            <PrivateRoute path={"/order_result"} component={OrderResult}/>
            <PrivateRoute exact path={"/setting_result"} component={SettingResult}/>
            <PrivateRoute path={"/houselist"} component={HouseList} />
            <PrivateRoute path={"/orderlist"} component={OrderList} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
