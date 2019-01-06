///house/maintain/supplier
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey';
import List from '@material-ui/core/List';
import SupplierItem from './SupplierItem';
import SearchBar from '../SearchBar';

const styles = theme => ({
    container: {
        verticalAlign: 'middle',
    },
    title: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        borderRadius: 10,
        width: '100%',
        color: '#ffffff',
        background: 'linear-gradient(to top right, #8E9BFF 0%, #D16DE4 100%)',
        boxShadow: '0px 5px 15px 0px rgba(180,180,180,0.6)',
    },
    fab: {
        marginTop: theme.spacing.unit * 8,
    },

});

const suppliers = [
    {id: '1', name: "Yale Repair", star: "5.0", info: "2.5km $30/ser"},
    {id: '2', name: "Fair Repair", star: "4.8", info: "3.5km $15/ser"},
    {id: '3', name: "168 Fix It", star: "4.5", info: "3.5km $40/ser"},
]

class SupplierList extends React.Component {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.title}>
                    <h4>Maintain Service Provider</h4>
                </div>
                <div>
                <List className={classes.list}>
                    { suppliers.map( (item) =>
                        <SupplierItem key={item.id} content={item} />
                    )}
                </List>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SupplierList);