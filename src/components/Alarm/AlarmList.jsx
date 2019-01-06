import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ItemList from '../ItemList';
import grey from '@material-ui/core/colors/grey';
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

const alarms = [
    {title: "Repair order", time: "Tomorrow 15:00"},
    {title: "Alarm Garden Maintain",time: "5 days later"},
    {title: "Alarm Roof Maintain", time: "10 days later"},
  ]

class AlarmList extends React.Component {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <TopBar title='Alarm'/>
                <ItemList items={alarms}/>
                <Link to='/house/alarm/set'>
                <Fab size= "small" aria-label="Add Alarm" className={classes.fab}>
                    <AddIcon />
                </Fab>
                </Link>
            </div>
        );
    }
}

export default withStyles(styles)(AlarmList);