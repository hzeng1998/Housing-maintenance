import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import BottomNav from './Bottom';

const styles = {
  list: {
    width: 250,
    height:60,
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
  },
    menuItemFont: {
      color: '#A78DFF',
    },
    icon:{
      fontSize:40,
    }
};


class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
        top: false,
        selectedIndex: 1,
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
                    <Avatar alt="Remy Sharp" src="" className={classes.bigAvatar} />
                </Grid>
                <Grid container justify="center" alignItems="center">
                    <Button justify="center" alignItems="center"> Fu Zhengzhe </Button>
                </Grid>

                <Divider />

                <ListItem button>
                     <ListItemIcon> <i className="material-icons"> account_box </i> </ListItemIcon>
                     <ListItemText> Person Information </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <i className="material-icons"> home </i> </ListItemIcon>
                    <ListItemText> My Houses </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <i className="material-icons"> receipt </i> </ListItemIcon>
                    <ListItemText> My Order </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <i className="material-icons"> attach_money </i> </ListItemIcon>
                    <ListItemText> My Wallet </ListItemText>
                </ListItem>


            </List>

            <List>
                <ListItem button>
                    <ListItemIcon> <i className="material-icons"> exit_to_app </i> </ListItemIcon>
                    <ListItemText> Log out </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <i className="material-icons"> settings </i> </ListItemIcon>
                    <ListItemText> Settings </ListItemText>
                </ListItem>
            </List>
          </div>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar>
                        <Grid container spacing={12}>
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
                            <Grid item xs = {8} justify="center" alignItems="center">
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
                        <Grid container spacing = {12}>
                            <Grid item xs={1}/>
                            <Grid item xs>
                                <b><center>15ºF</center></b>
                                <font size="2"><center>temperature</center></font>
                            </Grid>
                            <Grid item xs>
                                <b><center>55%</center></b>
                                <font size="2"><center>humidity</center></font>
                            </Grid>
                            <Grid item xs>
                                <b><center>12</center></b>
                                <font size="2"><center>air quality</center></font>
                            </Grid>
                            <Grid item xs={1}/>
                        </Grid>
                    </div>
                    <br/>
                    <div>
                        <Grid container justify="center" alignItems="center" spacing={12}>
                            <Grid item xs = {1}/>
                            <Grid item xs>
                                <center><IconButton color="inherit">
                                    <BuildIcon className={classes.icon}/>
                                </IconButton></center>
                                <font size="2"><center>warranty</center></font>
                            </Grid>
                            <Grid item xs>
                                <center><IconButton color="inherit">
                                    <AlarmIcon className={classes.icon}/>
                                </IconButton></center>
                                <font size="2"><center>alarm</center></font>
                            </Grid>
                            <Grid item xs>
                                <center><IconButton color="inherit">
                                    <MemoryIcon className={classes.icon}/>
                                </IconButton></center>
                                <font size="2"><center>smarthome</center></font>
                            </Grid>
                            <Grid item xs>
                                <center><IconButton color="inherit">
                                    <SettingsApplicationsIcon className={classes.icon}/>
                                </IconButton></center>
                                <font size="2"><center>manage</center></font>
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
