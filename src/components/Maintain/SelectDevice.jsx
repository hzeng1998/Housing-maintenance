import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ItemList from '../ItemList';


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
    {title: "Dinning Table", brand: "IKEA 2016",},
    {title: "Bedroom Clost", brand: "Houzz 2018"},
    
]

class SelectDevice extends React.Component {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.title}>
                    <h3>Devices</h3>
                </div>
                <ItemList items={devices} listType="device"/>
                {/* <Link to='/house/alarm/set'> */}
                <Fab size= "small" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
                {/* </Link> */}
            </div>
        );
    }
}

export default withStyles(styles)(SelectDevice);