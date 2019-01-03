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
import withRoot from '../withRoot';

import Inputs from './text.js'
import DialogSelect from './selectTimeUnit.js'
import SearchBar from './search2.js'
import CustomizedInputs from './setAlarm.js'
import ButtonAppBar from './top.js'
import DateAndTimePickers from './uptime.js'
import TextButtons from './addDevice.js'
import Grid from '@material-ui/core/Grid';
import ComplexGrid from './pic.js'

import DateImg from './pic/time.png'

const styles = theme => ({
  root: {
    
    backgroundColor: '#ffffff',
    textAlign: 'center',
    //paddingTop: theme.spacing.unit * 20,
    marginBottom: theme.spacing.unit * 100,
    
  },
  top: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 5,
  },
  back: {
    backgroundColor: '#ffffff',
    textAlign: 'left',
    marginBottom: theme.spacing.unit * 5,
  }
});

class Index extends React.Component {
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
      <ButtonAppBar />
      <img src={DateImg} width="278" height="321"/>
      <DateAndTimePickers />
        <SearchBar />
        <CustomizedInputs />
        <TextButtons />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
