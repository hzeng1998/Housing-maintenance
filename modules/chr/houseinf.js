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
import CameraAlt from '@material-ui/icons/CameraAlt';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import purple from '@material-ui/core/colors/purple';
import IntegrationReactSelect from './IntegrationReactSelect';
import ReactSVG from 'react-svg';
import Grid from '@material-ui/core/Grid';

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
const mypuple=deepPurple['A200'];
const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: { useNextVariants: true },
});

class houseInf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FName: '',
      LName: '',
      Desgintion:'',
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
    console.log('A name was submitted: ' + this.state.FName);
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
      <Grid container justify="flex-start">
        <Typography style={{marginTop: theme.spacing.unit*3, fontSize: 26, color: '#535D7E', lineheight: 40,justifyContent:'flex-start'}} component="h1" variant="h5">
          Tell us about yourself
        </Typography>
      </Grid>
        <Grid container style={{marginTop:15}} justify="flex-start" alignItems="center">
        <div style={{backgroundColor: '#fffff',
    borderColor: '#B6ADFD',
    boxShadow: '0 0 0 0.1rem rgba(0,123,255,.5)',
    borderRadius: 40,padding:5}}>
          <IconButton className={classes.avatar} onClick={this.handleSubmit}>
          <CameraAlt />
          </IconButton>
        </div>
          <h5 style={{fontSize: 14,color: '#A9AEBE',marginLeft:5}}> Add Profile Picture</h5>
        </Grid>

        
        <p className="former_chaim" color="mypuple">Register via your company email to connect with the people of your company.</p>
        <form className={classes.form}>
        <MuiThemeProvider theme={theme}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="FirstName">First Name</InputLabel>
            <Input id="FirstName" name="FirstName" value={this.state.FName} onChange={this.handleChange('FName')} autoComplete="First Name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="LastName">Last Name</InputLabel>
            <Input id="LastName" name="LastName" value={this.state.LName} onChange={this.handleChange("LName")} autoComplete="Last Name"  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="Desgintion">Desgintion</InputLabel>
            <Input id="Desgintion" name="Desgintion" value={this.state.Desgintion} onChange={this.handleChange("Desgintion")} autoComplete="Desgintion"  />
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
      </Paper>
    </main>
  );
  }
}


houseInf.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(houseInf);


