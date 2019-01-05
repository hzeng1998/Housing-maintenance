import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/HomeRounded';
import AssistantIcon from '@material-ui/icons/AssistantRounded';
import AccountIcon from '@material-ui/icons/MonetizationOnRounded';
import ShopIcon from '@material-ui/icons/LocalMallRounded';

const styles = {
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        boxShadow: '0px 0px 50px 0px rgba(180,180,180,0.5)',
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
                <BottomNavigationAction component={Link} to="/house" label="Home" icon={<HomeIcon />}/>
                <BottomNavigationAction component={Link} to="/notes" label="notes" icon={<AssistantIcon />} />
                <BottomNavigationAction component={Link} to="/shop" label="Shop" icon={<ShopIcon />} />
                <BottomNavigationAction component={Link} to="/account" label="Account" icon={<AccountIcon />} />
            </BottomNavigation>
        );
    }
}

BottomNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);