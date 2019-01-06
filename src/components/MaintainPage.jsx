import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridMenu from './Maintain/GridMenu'

const styles = theme => ({
    container: {
        verticalAlign: 'middle',
    },
    title: {
        paddingTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 6,
        color: '#aaaaaa',
        width: '100%',
        // boxShadow: '0px 2px 20px 0px rgba(180,180,180,0.6)',
    },
});


class MaintainPage extends React.Component {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.title}>
                    <h3>maintain</h3>
                    <p>Select the type of maintenance you want</p>
                </div>
                <GridMenu />
            </div>
        );
    }
}

export default withStyles(styles)(MaintainPage);