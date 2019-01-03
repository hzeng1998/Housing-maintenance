import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AssistantIcon from '@material-ui/icons/Assistant';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const styles = {
    root: {
        width: 500,
    },
};

class BottomNav extends React.Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                <BottomNavigationAction label="MyHouse" icon={<HomeIcon />} />
                <BottomNavigationAction label="Tips" icon={<AssistantIcon />} />
                <BottomNavigationAction label="Purchase" icon={<PeopleOutlineIcon />} />
                <BottomNavigationAction label="Finance" icon={<AttachMoneyIcon />} />
            </BottomNavigation>
        );
    }
}

BottomNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);