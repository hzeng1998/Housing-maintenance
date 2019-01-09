import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SearchBar from './search2.js'
import DateAndTimePickers from './uptime.js'
import DateImg from '../../../static/image/time.png'
import TopBar from '../../TopBar';
import TextField from '@material-ui/core/TextField';

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
    background: 'linear-gradient(to top right, #8E9BFF 0%, #D16DE4 100%)',
    color: '#ffffff',
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
        <TopBar title='Alarm'/>
        <img src={DateImg} width="60%" height="60%" alt="date picker"/>

        <TextField
                disabled
                label="Selected Device"
                defaultValue="111"
                margin="normal" fullWidth
              />

        <DateAndTimePickers />
        
        <Button variant="contained" className={classes.setBtn}>
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
