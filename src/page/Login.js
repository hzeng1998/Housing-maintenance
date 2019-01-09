import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import logoURL from "../static/image/LOGO.png";
import {Redirect} from "react-router-dom";
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
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',
    boxShadow: '4px 6px 16px 2px #888888',
    height: '3.5em',
  },
  logo: {
    marginBottom: "20%",
    marginTop: "20%",
    textAlign: "center",
  },
  snackbar: {
    position: 'absolute',
  },
  snackbarContent: {
    width: 360,
  },
});

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      msg: "",
      password: "",
      user_account: "",
      logged:"",
      remembered: false,
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  authorise = (e) => {

    let opts = {
      method: "post",
      body: JSON.stringify({user_account: `${this.state.user_account}`, password: `${this.state.password}`}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };

    fetch("/session", opts)
      .then(res => {
        return res.json();
      })
      .then(status => {
        if (status.logged) {
          this.setState({logged: status.logged});
          sessionStorage.setItem('__content_token', status.token);
          console.log(status);
        } else
          this.setState({open: true, msg: "ERROR incorrect user account or password"});
      })
      .catch(err => console.log(err));

    e.preventDefault();
  };

  render() {
    const {classes} = this.props;
    const {from} = this.props.state || {from: {pathname: "/house"}};
    const {open, msg} = this.state;

    if (this.state.logged) {
      return <Redirect to={from}/>
    }

    return (

      <main className={classes.main}>
        <div className={classes.logo}>
          <img src={logoURL} alt="logo" width={'100%'} height={'auto'}/>
        </div>
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={this.authorise}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange("user_account")}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange("password")}/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" onChange={(e) => this.setState({"remembered": e.target.value})}/>}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {"Log in"}
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
                Undo
              </Button>
            }
            className={classes.snackbar}
          />
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);