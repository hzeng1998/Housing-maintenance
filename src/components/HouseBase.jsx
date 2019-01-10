import React from 'react';
import { Switch } from 'react-router-dom';
import BottomNav from './BottomNav'
import HomePage from './HomePage'
import MaintainPage from './MaintainPage'
import SetAlarm from './Alarm/SetAlarm'
import AlarmList from './Alarm/AlarmList';
import ManagePage from './ManagePage';
import SupplierList from './Maintain/SupplierList';
import SupplierInfo from './Maintain/SupplierInfo';
import DeviceType from './DeviceType';
import OrderForm from  './Maintain/OrderForm';
import OrderList from './OrderList';
import DeviceList from './DeviceList';
import SelectDevice from './Alarm/SelectDevice';
import PrivateRoute from "./PrivateRoute";

class HouseBase extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <PrivateRoute exact path='/house' component={HomePage} />
          <PrivateRoute exact path='/house/maintain' component={MaintainPage} />
          <PrivateRoute exact path='/house/maintain/supplier_list' component={SupplierList} />
          <PrivateRoute exact path='/house/maintain/supplier_info' component={SupplierInfo} />
          <PrivateRoute exact path='/house/maintain/order' component={OrderForm}/>
          <PrivateRoute exact path='/house/alarm' component={AlarmList} />
          <PrivateRoute exact path='/house/alarm/select_device' component={SelectDevice} />
          <PrivateRoute exact path='/house/alarm/set' component={SetAlarm} />
          <PrivateRoute exact path='/house/manage' component={ManagePage} />
          <PrivateRoute exact path={"/house/device_type"} component={DeviceType}/>
          <PrivateRoute exact path={"/house/device_list"} component={DeviceList}/>
          <PrivateRoute exact path={"/house/order_list"} component={OrderList}/>
        </Switch>
        <BottomNav />
      </div>

    );
  }
}

export default HouseBase;