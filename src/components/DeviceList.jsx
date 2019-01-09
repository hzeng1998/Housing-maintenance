import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ItemList from './ItemList';
import List from '@material-ui/core/List';
import Item from './Item';

const styles = theme => ({
    container: {
        verticalAlign: 'middle',
    },
    title: {
        paddingTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        color: '#aaaaaa',
        width: '100%',
        // boxShadow: '0px 2px 20px 0px rgba(180,180,180,0.6)',
    },
    fab: {
        marginTop: theme.spacing.unit * 10,
    }

});

const devices = [
    {id: '1024', title: "Dinning Table", brand: "IKEA 2016",},
    {id: '2483', title: "Bedroom Closet", brand: "Houzz 2018"},
]

class DeviceList extends React.Component {
    state = {
        
    }
    componentDidMount() {
        console.log(this.props.location.state.category);
    }

    render() {
        const {classes} = this.props;
        const category = this.props.location.state.category;
        return(
            <div className={classes.container}>
                <div className={classes.title}>
                    <h3>Devices</h3>
                </div>
                <List className={classes.list}>
                    { devices.map( (device, index) =>
                    <Item key={index} content={{"id": device.id, "title": device.title, "detail": device.brand}} use="maintain" type="device" category={category}/>
                    )}
                </List>
               
                {/* <Link to='/house/alarm/set'> */}
                <Fab size= "small" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
                {/* </Link> */}
            </div>
        );
    }
}

export default withStyles(styles)(DeviceList);