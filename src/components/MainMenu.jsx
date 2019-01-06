/** 
 * MyHouse of Bottom Nav
 * TopMenu + SizeBar + ItemList
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import BuildIcon from '@material-ui/icons/Build';
import AlarmIcon from '@material-ui/icons/Alarm';
import MemoryIcon from '@material-ui/icons/Memory';
import OrderIcon from '@material-ui/icons/AssignmentOutlined';
import {AccountBox} from "@material-ui/icons";
import {Home} from "@material-ui/icons";
import {Receipt} from "@material-ui/icons";
import {AttachMoney} from "@material-ui/icons";
import {ExitToApp} from "@material-ui/icons";
import {Settings} from "@material-ui/icons";
import AvatorImage from "../static/image/avatar.jpg";

const styles = {
    list: {
        width: 250,
        height: 60,
    },
    fullList: {
        width: 'auto',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    root: {
        flexGrow: 1,
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
        appBar: {
        background: 'linear-gradient(to top right, #8E9BFF 0%, #D16DE4 100%)',
    },
    selectTitle: {
        fontSize: 15,
        fontcolor: '#ffffff',
        textAlign: 'center',
        margin: '0 auto',
    },
    menuItemFont: {
        color: '#A78DFF',
    },
    icon:{
        fontSize: 40,
        color: '#ffffff',
    }
};


class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
        top: false,
        selectedIndex: 1,
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
     });
    };

    handleClickListItem = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuItemClick = (event, index) => {
        this.setState({ selectedIndex: index, anchorEl: null });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const options = [
            'Forbidden City',
            'Summer Palace',
            'Buckingham Palace',
            'Yuquan Campus',
        ];

        const sideList = (
          <div className={classes.list}>
            <List>
                <Grid container justify="center" alignItems="center">
                    <Avatar alt="Remy Sharp" src={AvatorImage} className={classes.bigAvatar} />
                </Grid>
                <Grid container justify="center" alignItems="center">
                    <Button justify="center" alignItems="center"> Fu Zhengzhe </Button>
                </Grid>

                <Divider />

                <ListItem button>
                     <ListItemIcon> <AccountBox/> </ListItemIcon>
                     <ListItemText> Person Information </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <Home/> </ListItemIcon>
                    <ListItemText> My Houses </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <Receipt/> </ListItemIcon>
                    <ListItemText> My Order </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <AttachMoney /></ListItemIcon>
                    <ListItemText> My Wallet </ListItemText>
                </ListItem>

            </List>

            <List>
                <ListItem button>
                    <ListItemIcon> <ExitToApp/> </ListItemIcon>
                    <ListItemText> Log out </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <Settings/> </ListItemIcon>
                    <ListItemText> Settings </ListItemText>
                </ListItem>
            </List>
          </div>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar>
                        <Grid container spacing={16}>
                            <Grid item xs = {2}>
                                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                                            onClick={this.toggleDrawer('left', true)}>
                                    <MenuIcon/>
                                </IconButton>
                                <SwipeableDrawer
                                    open={this.state.left}
                                    onClose={this.toggleDrawer('left', false)}
                                    onOpen={this.toggleDrawer('left', true)}
                                >
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        onClick={this.toggleDrawer('left', false)}
                                        onKeyDown={this.toggleDrawer('left', false)}
                                    >
                                        {sideList}
                                    </div>
                                </SwipeableDrawer>
                            </Grid>
                            <Grid item xs = {8} >
                                <List component="nav">
                                    <ListItem
                                        button
                                        aria-haspopup="true"
                                        aria-controls="lock-menu"
                                        onClick={this.handleClickListItem}>
                                        <span className={classes.selectTitle}>
                                            <center>
                                                {options[this.state.selectedIndex]}
                                            </center>
                                        </span>
                                    </ListItem>
                                </List>
                                <center><Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={this.handleClose}
                                    className={classes.selectTitle}
                                >
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            className={classes.menuItemFont}
                                            selected={index === this.state.selectedIndex}
                                            onClick={event => this.handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Menu></center>
                            </Grid>
                            <Grid item xs = {2} />
                        </Grid>
                    </Toolbar>
                    <br/>
                    <div>
                        <Grid container spacing = {16}>
                            <Grid item xs={1}/>
                            <Grid item xs>
                                <b><center>15ºF</center></b>
                                <font size="2"><center>Temperature</center></font>
                            </Grid>
                            <Grid item xs>
                                <b><center>55%</center></b>
                                <font size="2"><center>Humidity</center></font>
                            </Grid>
                            <Grid item xs>
                                <b><center>12</center></b>
                                <font size="2"><center>Air Quality</center></font>
                            </Grid>
                            <Grid item xs={1}/>
                        </Grid>
                    </div>
                    <br/>
                    <div>
                        <Grid container justify="center" spacing={16}>
                            <Grid item xs = {1}/>
                            <Grid item xs>
                                <center><IconButton color="inherit">
                                <Link to='/house/maintain'>
                                    <BuildIcon className={classes.icon}/>
                                </Link>
                                </IconButton></center>
                               
                                <font size="2"><center>Maintain</center></font>
                            </Grid>
                            <Grid item xs>
                                <center><IconButton color="inherit">
                                <Link to='/house/alarm'>
                                    <AlarmIcon className={classes.icon}/>
                                </Link>
                                </IconButton></center>
                                <font size="2"><center>Alarm</center></font>
                            </Grid>
                            <Grid item xs>
                                <center><IconButton color="inherit">
                                <Link to='/house/manage'>
                                    <OrderIcon className={classes.icon}/>
                                </Link>
                                </IconButton></center>
                                <font size="2"><center>Manage</center></font>
                            </Grid>
                            <Grid item xs>
                                <center><IconButton color="inherit">
                                <Link to='/house/smart_home'>
                                    <MemoryIcon className={classes.icon}/>
                                </Link>
                                </IconButton></center>
                                <font size="2"><center>SmartHome</center></font>
                            </Grid>
                            <Grid item xs = {1}/>
                        </Grid>
                    </div>
                    <br/>
                </AppBar>
            </div>
        );
    }
}



MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MenuAppBar);
