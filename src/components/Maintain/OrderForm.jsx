import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import TopBar from '../TopBar';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
import Snackbar from "@material-ui/core/Snackbar";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',
  },
  form: {
    borderbottom: '#9370db',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 5,
    background: 'linear-gradient(to top right, #8E9BFF 0%, #D16DE4 100%)',
    boxShadow: '5px 5px 20px 0px rgba(150,150,150,0.7)',
    height: '3.5em',
    marginBottom: theme.spacing.unit * 3,
  },
  title: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    color: '#ffffff',
    background: 'linear-gradient(to top right, #8E9BFF 0%, #D16DE4 100%)',
    boxShadow: '0px 5px 15px 0px rgba(180,180,180,0.6)',
  },
  snackbar: {
    position: 'absolute',
  },
  snackbarContent: {
    width: 360,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: {useNextVariants: true},
});

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: '',
      time: '',
      tel: '',
      info: this.props.location.state,
      res: false,
      open: false,
      msg: '',
    };

    this.classes = props;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit(event) {
    const {info} = this.state;
    const supplierId = info.supplier.content.id;
    const deviceId = info.device.values.content.id;

    fetch('/submit_order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        op: "register",
        divice_id: Number(deviceId),
        provider_id: Number(supplierId),
        problem: this.state.detail,
        avaliable_time: this.state.time,
        order_phone: this.state.tel,
      })
    }).then(res => {
      return res.json();
    }).then(res => {
      console.log(res);
      if(res.status===true){
        this.setState({
          open: true,
          msg: 'Submit order succeed!',
        });
        setTimeout(() => {
          this.setState({res: true});
        }, 1000);
      }    
    })

    console.log("Order submitted!");
    event.preventDefault();
  }
 
  render() {
    const {classes} = this.classes;
    const {info, open, msg} = this.state;
    const supplier = info.supplier.content.name;
    const device = info.device.values.content;
    const deviceInfo = device.title + ' / ' + device.detail;

    if(this.state.res)
      return <Redirect to='/order_result' />;

    return (
      <main className={classes.main}>
        <div className={classes.paper}>
          <TopBar title="Submit Order"/>
          <Typography variant={"subtitle1"} style={{textAlign:"left", color:"grey", marginTop: "1em"}}>
          Please fill in the form and submit your maintain order
          </Typography>

          <form className={classes.form}>
            <MuiThemeProvider theme={theme}>
              <TextField
                disabled
                label="Selected Device"
                defaultValue={deviceInfo}
                margin="normal" fullWidth
              />
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="ProblemDescription">Problem Description</InputLabel>
                <Input id="ProblemDescription" name="detail" value={this.state.detail} onChange={this.handleChange("detail")}
                       autoComplete="Brand"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="AvailableTime">Available Time</InputLabel>
                <Input id="AvailableTime" name="time" value={this.state.time}
                       onChange={this.handleChange("time")} autoComplete="time"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="PhoneNumber">Phone Number</InputLabel>
                <Input id="PhoneNumder" name="tel" value={this.state.tel}
                       onChange={this.handleChange("tel")} autoComplete="time"/>
              </FormControl>
            </MuiThemeProvider>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              color="primary"
              onClick={this.handleSubmit}>
              Submit
            </Button>
          </form>

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
      </main>
    );
  }
}


OrderForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderForm);