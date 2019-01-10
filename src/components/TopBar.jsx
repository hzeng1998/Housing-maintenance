import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        verticalAlign: 'middle',
    },
    title: {
        paddingTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        width: '100%',
        color: '#9e9e9e'
        // boxShadow: '0px 2px 20px 0px rgba(180,180,180,0.6)',
    },
});


function TopBar(props) {
    const {classes} = props;
    return(
        <div className={classes.container}>
            <div className={classes.title}>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default withStyles(styles)(TopBar);