import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/EventNote';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import purple from '@material-ui/core/colors/purple';
import IntegrationReactSelect from './IntegrationReactSelect';

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
    marginTop: theme.spacing.unit * 8,
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
    borderbottom:'#9370db',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',
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
const mypuple=deepPurple['A200'];
const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: { useNextVariants: true },
});

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Devices: '',
      Problem: '',
      Time:'',
      Phone:'',
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
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.Devices);
    console.log(this.child.state.single);
    event.preventDefault();
  }
  onRef = (ref) => {
    this.child = ref;
  }

  render() {
  const { classes } = this.classes;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Warranty
        </Typography>
        
        <p className="former_chaim" color="mypuple">Register via your company email to connect with the people of your company.</p>
        <form className={classes.form}>
        <MuiThemeProvider theme={theme}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="Devices">Select Devices</InputLabel>
            <Input id="Devices" name="Devices" value={this.state.Devices} onChange={this.handleChange('Devices')} autoComplete="Devices" autoFocus />
          </FormControl>
          <IntegrationReactSelect onRef={this.onRef}/>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="Problem">Describe Your Problem</InputLabel>
            <Input id="Problem" name="Problem" value={this.state.Problem} onChange={this.handleChange("Problem")} autoComplete="Your Problem"  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="Time">Select Avaliable Time</InputLabel>
            <Input id="Time" name="Time" value={this.state.Time} onChange={this.handleChange("Time")} autoComplete="Avaliable Time"  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="Phone">Tell Us Your Moblie Number</InputLabel>
            <Input id="Phone" name="Phone" value={this.state.Phone} onChange={this.handleChange("Phone")} autoComplete="Moblie Number"  />
          </FormControl>
          </MuiThemeProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            color="primary"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </form>
        <p className="latter_chaim"> Haven’t added the devices?</p>
        <a className="outer_chaim"> Add the devices</a>
      </Paper>
    </main>
  );
  }
}


Information.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Information);