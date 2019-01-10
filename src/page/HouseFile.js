import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Snackbar from "./HouseInfo";

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
    borderBottom: '#9370db',
    marginTop: "20%",
    marginBottom:"20%",
    width: '100%', // Fix IE 11 issue.
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

class HouseFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ReportURL: '',
      OwnerName: '',
      msg:"",
      open: false
    };
    this.classes = props;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (event) => {

    if (this.state.OwnerName && this.state.ReportURL) {

      let {OwnerName, ReportURL} = this.state;

      let data = new FormData();
      data.append("OwnerName", OwnerName);
      data.append("ReportURL", ReportURL);

      const opts = {
        method: "post",
        body: data,
        mode: 'cors',
      };

      fetch("/house_report", opts)
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            this.setState({open: true, msg: "Add House Information Succeed"});
            setTimeout(() => this.props.history.goBack(), 1000);
          }
        })
        .catch(e => {
          console.log(e);
        });


    } else {
      console.log("Incomplete");
      this.setState({open: true, msg: "Please Complete All of the Required Information"});
    }
    event.preventDefault();
  };

  render() {
    const {classes} = this.props;
    const {msg, open} =this.state;
    return (
      <main className={classes.main}>

        <div className={classes.paper}>
          <div style={{textAlign: "left"}}>
            <Typography
              style={{
                marginTop: '20%',
                fontSize: '2em',
              }}
              component="h1"
              variant="h5">
              House Info
            </Typography>
            <Typography variant={"subtitle1"} style={{color: "grey"}}>
              Load a house report by accessing the url you input.
            </Typography>
          </div>

          <form className={classes.form}>

            <MuiThemeProvider theme={theme}>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="ReportURL">Input your report URL</InputLabel>
                <Input id="ReportURL" name="ReportURL" value={this.state.ReportURL}
                       onChange={this.handleChange('ReportURL')}
                       autoFocus/>
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="OwnerName">Owner Name</InputLabel>
                <Input id="OwnerName" name="OwnerName" value={this.state.OwnerName}
                       onChange={this.handleChange("OwnerName")}/>
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="verification" color="primary" />}
                label="verification passed"
              />
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


HouseFile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HouseFile);