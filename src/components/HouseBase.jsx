import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import SelectDevice from './Maintain/SelectDevice';

class HouseBase extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/house' component={HomePage} />
                    <Route exact path='/house/maintain' component={MaintainPage} />
                    <Route exact path='/house/maintain/supplier_list' component={SupplierList} />
                    <Route exact path='/house/maintain/supplier_info' component={SupplierInfo} />
                    <Route exact path='/house/maintain/order' component={OrderForm}/>
                    <Route exact path='/house/maintain/select_device' component={SelectDevice}/>
                    <Route exact path='/house/alarm' component={AlarmList} />
                    <Route exact path='/house/alarm/set' component={SetAlarm} />
                    <Route exact path='/house/manage' component={ManagePage} />
                    <Route exact path={"/house/device_type"} component={DeviceType}/>
                    <Route exact path={"/house/device_list"} component={DeviceList}/>
                    <Route exact path={"/house/order_list"} component={OrderList}/>             
                </Switch>
                <BottomNav />
            </div>
            
        );
    }
}

export default HouseBase;