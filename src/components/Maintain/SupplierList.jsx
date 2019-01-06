///house/maintain/supplier
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey';
import List from '@material-ui/core/List';
import Item from '../Item'

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

const suppliers = [
    {id: '1', name: "Yale Repair", star: "5.0", info: "2.5km $30/ser"},
    {id: '2', name: "Fair Repair", star: "4.8", info: "3.5km $15/ser"},
    {id: '3', name: "168 fix it", star: "4.5", info: "3.5km $40/ser"},
]

class SupplierList extends React.Component {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.title}>
                    <h3>Maintain Server</h3>
                </div>
                <div>
                <List className={classes.list}>
                    { suppliers.map( (item, index) =>
                        <Item key={index} content={item} Component={Link} to='/house/maintain/supplier?id={item.id}' />
                    )}
                </List>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SupplierList);