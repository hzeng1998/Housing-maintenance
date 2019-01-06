import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomNav from './BottomNav'
import HomePage from './HomePage'
import MaintainPage from './MaintainPage'
import SetAlarm from './Alarm/SetAlarm'
import AlarmList from './Alarm/AlarmList';
import ManagePage from './ManagePage';
import SupplierList from './Maintain/SupplierList';
import ManageDevice from "../page/ManageDevice";

class HouseBase extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/house' component={HomePage} />
                    <Route exact path='/house/maintain' component={MaintainPage} />
                    <Route exact path='/house/maintain/supplier_list' component={SupplierList} />
                    <Route exact path='/house/alarm' component={AlarmList} />
                    <Route exact path='/house/alarm/set' component={SetAlarm} />
                    <Route exact path='/house/manage' component={ManagePage} />
                  <Route exact path={"/house/manage/devices"} component={ManageDevice}/>
                </Switch>
                <BottomNav />
            </div>
            
        );
    }
}

export default HouseBase;