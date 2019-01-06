import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CameraAlt from '@material-ui/icons/CameraAlt';
import Typography from '@material-ui/core/Typography';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import purple from '@material-ui/core/colors/purple';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";

import "../static/css/HouseInfo.css";

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
  center: {
    textAlign: 'center',
    color: "grey",
  },
  link: {
    color: "blue",
    textDecoration: "none",
  }
});

const mypuple = deepPurple['A200'];

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: {useNextVariants: true},
});

class HouseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HouseName: '',
      Address: '',
      HouseArea: '',
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
              House Info
            </Typography>
          </Grid>

          <input type="file" name="profileImage" onChange={this.uploadImage} style={{display: 'none'}}
                 ref={this.inputRef}/>

          <Grid container style={{marginTop: 15}} justify="flex-start" alignItems="center">
            <div
              style={{
                backgroundColor: '#fffff',
                borderColor: '#B6ADFD',
                boxShadow: '0 0 0 0.1rem rgba(0,123,255,.5)',
                borderRadius: 40, padding: 5
              }}
              onClick={this.chooseFile}>

              <Avatar className={classes.avatar}>
                <CameraAlt/>
              </Avatar>

            </div>
            <h5 style={{fontSize: 14, color: '#A9AEBE', marginLeft: 10}}> Add House Picture</h5>
          </Grid>

          <form className={classes.form}>

            <MuiThemeProvider theme={theme}>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="HouseName">House Name</InputLabel>
                <Input id="HouseName" name="HouseName" value={this.state.HouseName}
                       onChange={this.handleChange('HouseName')}
                       autoFocus/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="Address">Address</InputLabel>
                <Input id="Address" name="Address" value={this.state.Address}
                       onChange={this.handleChange("Address")} autoComplete="street-address"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="HouseArea">House Area</InputLabel>
                <Input id="HouseArea" name="HouseArea" value={this.state.HouseArea}
                       onChange={this.handleChange("HouseArea")}/>
              </FormControl>

            </MuiThemeProvider>

            <Typography variant="subtitle1" gutterBottom className={classes.center}>
              {"Want get more help about your house?"}
            </Typography>
            <Typography variant="h6" gutterBottom className={`${classes.center} ${classes.link}`}>
              <Link to={"#"}>{"Fill in more information"}</Link>
            </Typography>

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


HouseInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HouseInfo);