import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CameraAlt from '@material-ui/icons/CameraAlt';
import Typography from '@material-ui/core/Typography';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import TopBar from '../TopBar';

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
    marginTop: theme.spacing.unit * 2,
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
    marginTop: theme.spacing.unit * 3,
    background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',

    boxShadow: '4px 6px 16px 2px #888888',
    height: '3.5em',
    marginBottom: theme.spacing.unit * 3,
    '&:hover': {
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
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
      info: this.props.location.state,
    };

    this.inputRef = React.createRef();
    this.classes = props;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.chooseFile = this.choose.bind(this);
  }

  choose = () => {
    this.inputRef.current.click();
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.HouseName);
    event.preventDefault();
  }
 
  render() {
    const {classes} = this.classes;
    const {info} = this.state;
    const supplier = info.supplier.content.name;
    const device = info.values.values.content;
    const deviceInfo = device.title + ',' + device.brand;

    return (
      <main className={classes.main}>
        <div className={classes.paper}>
          <TopBar title="Order Form"/>
          <Typography variant={"subtitle1"} style={{textAlign:"left", color:"grey", marginTop: "1em"}}>
          Please fill in the form and submit your maintain order
          </Typography>
          <p> 
            {deviceInfo} 
            {supplier}
          </p>
          <form className={classes.form}>

            <MuiThemeProvider theme={theme}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="ProblemDescription">Problem Description</InputLabel>
                <Input id="ProblemDescription" name="detail" value={this.state.Brand} onChange={this.handleChange("detail")}
                       autoComplete="Brand"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="AvailableTime">Available Time</InputLabel>
                <Input id="AvailableTime" name="time" value={this.state.PurchaseTime}
                       onChange={this.handleChange("time")} autoComplete="time"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="AvailableTime">Available Time</InputLabel>
                <Input id="AvailableTime" name="time" value={this.state.PurchaseTime}
                       onChange={this.handleChange("time")} autoComplete="time"/>
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
        </div>
      </main>
    );
  }
}


OrderForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderForm);