import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ClockIcon from '@material-ui/icons/Schedule';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: "30px",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 68,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <AppBar position="static" color="default">
        <Toolbar >   
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <Link to='/house/alarm'>
            <ArrowBack />
          </Link>
          </IconButton>
          <Typography variant="h6" color="inherit">
            <IconButton aria-label="pic">
              <ClockIcon />
            </IconButton>
            <IconButton aria-label="pic">
              Alarm
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);