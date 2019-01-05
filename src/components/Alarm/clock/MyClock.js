import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import DialogSelect from './selectTimeUnit.js'
import SearchBar from './search2.js'
import DateAndTimePickers from './uptime.js'
import purple from '@material-ui/core/colors/deepPurple';
import DateImg from '../../../images/time.png'

const styles = theme => ({
  root: {
    textAlign: 'center',
    //paddingTop: theme.spacing.unit * 20,
  },
  topBar: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
  },
  title: {
    paddingTop: theme.spacing.unit * 1.5,
    margin: 'auto',
    display: 'inline-block',
    color: '#aaaaaa',
  },
  retButton: {
    position: 'absolute',
    left: 10,
  },
  setBtn: {
    marginTop: theme.spacing.unit * 1.5,
    boxShadow: 'none',
    textTransform: 'none',
    backgroundColor: purple['A200'],
    height:'40px',
    width:'300px'
  }
});

class MyClock extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };



  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root} >
        <div className={classes.topBar}>
          <IconButton className={classes.retButton} aria-label="Menu">
            <Link to='/house/alarm'>
              <ArrowBack />
            </Link>
          </IconButton>
          <h4 className={classes.title}>alarm</h4>
        </div>
        <img src={DateImg} width="60%" height="60%" alt="date picker"/>
        <DateAndTimePickers />
        <SearchBar />
        <Button variant="contained" color="primary" className={classes.setBtn}>
          Set the alarm
        </Button>
        <div>
          <Button disabled>
            <span>Haven't add the device? </span>
          </Button>
          <br />
          <Button color="primary">
            <span> Add the devices </span>
          </Button>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(MyClock);
