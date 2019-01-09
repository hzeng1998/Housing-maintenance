import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ItemList from '../ItemList';
// import grey from '@material-ui/core/colors/grey';
import TopBar from '../TopBar';

const styles = theme => ({
    container: {
        verticalAlign: 'middle',
    },
    title: {
        paddingTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        width: '100%',
        color: '#bdbdbd'
        // boxShadow: '0px 2px 20px 0px rgba(180,180,180,0.6)',
    },
    fab: {
        marginTop: theme.spacing.unit * 8,
    }

});

// const alarms = [
//     {title: "Alarm Garden Maintain",time: "5 days later"},
//     {title: "Alarm Roof Maintain", time: "10 days later"},
//   ]

class AlarmList extends React.Component {
    state = {
        alarms: [],
    }

    //get alarmList from backend API
    componentDidMount() {
        const api_url = '/alarm';
        fetch(api_url).then(res => {
            if(res['status'] === 200)
                return res.json();
            else
            {
                return 0;
                console.log(res);
            }
        }).then( res => {
            console.log(res);
            if(res.length > 0)
                this.setState({
                    alarms: res,
                })
        })
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <TopBar title='Alarm'/>
                <ItemList items={this.state.alarms} listType="alarm"/>
                <Link to='/house/alarm/select_device'>
                <Fab size= "small" aria-label="Add Alarm" className={classes.fab}>
                    <AddIcon />
                </Fab>
                </Link>
            </div>
        );
    }
}

export default withStyles(styles)(AlarmList);