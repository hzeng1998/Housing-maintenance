//select device for alarm
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridMenu from '../GridMenu';

const styles = theme => ({
    container: {
        verticalAlign: 'middle',
    },
    title: {
        paddingTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 6,
        color: '#aaaaaa',
        width: '100%',
    },
});


class SelectDevice extends React.Component {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.title}>
                    <h3>Alarm</h3>
                    <p>Select the device you want to set alarm</p>
                </div>
                <GridMenu link='/house/device_list' action="alarm"/>
            </div>
        );
    }
}

export default withStyles(styles)(SelectDevice);