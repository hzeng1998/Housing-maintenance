import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import logoURL from '../static/image/LOGO.png';
import {Link, Redirect} from "react-router-dom";
import {withRouter} from "react-router-dom";

import "../static/css/SignInStart.css";

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
    textAlign: "left",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',
    boxShadow: '4px 6px 16px 2px #888888',
    height: '3.5em',
  },
  center: {
    textAlign: 'center',
  },
  paper: {},
  logo: {
    marginBottom: "50%",
    marginTop: "30%",
    textAlign: "center",
  },
  link: {
    color: "blue",
    textDecoration: "none",
  }
});

class SignInStart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      email: "",
    }
  }

  render() {
    const {classes} = this.props;

    return (
      this.state.submit ?
        <Redirect
          to={`/register/email=${this.state.email}`}
        /> :
        <main className={classes.main}>

          <div className={classes.logo}>
            <img src={logoURL} alt="logo" width={'100%'} height={'auto'}/>
          </div>
          <div className={classes.paper}>

            <Typography variant="h4" gutterBottom>
              Get Started
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Sign up for new account, enter your email and get started.
            </Typography>

            <form className={classes.form}
                  onSubmit={event => {
                    event.preventDefault();
                    this.setState({"submit": true});
                  }}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus
                       onChange={(event) => this.setState({"email": event.target.value})}/>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Next
              </Button>
              <Typography variant="subtitle1" gutterBottom className={classes.center}>
                {"Already had an account?"}
              </Typography>
              <Typography variant="h6" gutterBottom className={`${classes.center} ${classes.link}`}>
                <Link to={"/login"}>{"Log in"}
                </Link>
              </Typography>

            </form>
          </div>
        </main>
    );
  }
}

SignInStart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SignInStart));