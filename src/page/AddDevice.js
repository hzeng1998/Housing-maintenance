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

class Device extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Brand: '',
      PurchaseTime: '',
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
  uploadImage() {
    console.log("upload file");
  }

  render() {
    const {classes} = this.classes;
    return (
      <main className={classes.main}>

        <div className={classes.paper}>

          <Grid container justify="flex-start">
            <Typography
              style={{
                marginTop: theme.spacing.unit * 3,
                fontSize: 26,
                color: '#535D7E',
                lineheight: 40,
                justifyContent: 'flex-start'
              }}
              component="h1"
              variant="h5">
              Add devices
            </Typography>
          </Grid>

          <input type="file" name="profileImage" onChange={this.uploadImage} style={{display:'none'}} ref={this.inputRef}/>

          <Grid container style={{marginTop: 15}} justify="flex-start" alignItems="center">
            <div
              style={{
                backgroundColor: '#fffff',
                borderColor: '#B6ADFD',
                boxShadow: '0 0 0 0.1rem rgba(0,123,255,.5)',
                borderRadius: 40, padding: 5
              }}
              onClick={ this.chooseFile}>

              <Avatar className={classes.avatar}>
                <CameraAlt/>
              </Avatar>

            </div>
            <h5 style={{fontSize: 14, color: '#A9AEBE', marginLeft: 10}}> Add Device Picture</h5>
            </Grid>

          <Typography variant={"subtitle1"} style={{textAlign:"left", color:"grey", marginTop: "1em"}}>Add device by entering basic information of the device</Typography>

          <form className={classes.form}>

            <MuiThemeProvider theme={theme}>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="Name">Name</InputLabel>
                <Input id="Name" name="Name" value={this.state.Name} onChange={this.handleChange('HouseName')}
                       autoComplete="Name" autoFocus/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="Brand">Brand</InputLabel>
                <Input id="Brand" name="Brand" value={this.state.Brand} onChange={this.handleChange("Brand")}
                       autoComplete="Brand"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="PurchaseTime">Purchase Time</InputLabel>
                <Input id="PurchaseTime" name="Purchase Time" value={this.state.PurchaseTime}
                       onChange={this.handleChange("PurchaseTime")} autoComplete="time"/>
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


Device.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Device);