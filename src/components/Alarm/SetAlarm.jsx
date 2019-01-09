import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import DateImg from '../../static/image/time.png'
import TopBar from '../TopBar';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from "@material-ui/core/Snackbar";

const styles = theme => ({
  root: {
    textAlign: 'center',
    //paddingTop: theme.spacing.unit * 20,
  },
  topBar: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 1,
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
    marginTop: theme.spacing.unit * 2,
    boxShadow: 'none',
    textTransform: 'none',
    background: 'linear-gradient(to top right, #8E9BFF 0%, #D16DE4 100%)',
    color: '#ffffff',
    height:'40px',
    width:'300px'
  },
  form: {
      width: '80%',
      margin: '0 auto',
  },
  dateField: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
    width: '100%',
  },
  snackbar: {
    position: 'absolute',
  },
  snackbarContent: {
    width: 360,
  },
});

class SetAlarm extends React.Component {
    state = {
        open: false,
        success: false,
        deviceId: this.props.location.state.content.id,
        date: '',
        msg: '',
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

    componentDidMount() {
        console.log(this.props.location.state);
    }

    
    handleChange = e => {
        this.setState({
            date: e.target.value,
        });
    }

    handleSubmit = e => {
        fetch('/alarm_profile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              divice_id: Number(this.state.deviceId),
              Time: this.state.date,
            })
          }).then(res => {
            return res.json();
          }).then(res => {
            console.log(res);
            if(res.status===true){
              this.setState({
                open: true,
                msg: 'Set Alarm success!',
              });
              setTimeout(() => {
                this.setState({res: true});
              }, 1000);
            }    
          })
      
          console.log("Alarm Set!");
          e.preventDefault();
    }

    render() {
        const { classes } = this.props;
        const { open, msg } = this.state;
        const device = this.props.location.state.content;
        const deviceInfo = device.title + ' (' + device.detail + ')';

        if(this.state.success)
            return <Redirect to='/alarm_list' />;

        return (
        <div className={classes.root} >
            <TopBar title='Alarm'/>
            <img src={DateImg} width="60%" height="60%" alt="date picker"/>
            <form className={classes.form}>
                <TextField disabled label="Selected Device" defaultValue={deviceInfo} margin="normal" fullWidth />

                <FormControl margin="normal" required fullWidth>
                    <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.dateField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={this.handleChange}
                />
              </FormControl>
            
            </form>
            <Button variant="contained" className={classes.setBtn} onClick={this.handleSubmit}>
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

            <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'snackbar-fab-message-id',
              className: classes.snackbarContent,
            }}
            message={<span id="snackbar-fab-message-id">{msg}</span>}
            action={
              <Button color="inherit" size="small" onClick={this.handleClose}>
                OK
              </Button>
            }
            className={classes.snackbar}
          />
        </div>
    );
}
}


export default withStyles(styles)(SetAlarm);
