import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import houseURL from '../static/image/house.png';
import {Link} from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {ArrowBack} from "@material-ui/icons";

const styles = theme => ({
  main: {
    width: '100%',
    display: 'block', // Fix IE 11 issue.
    background: 'linear-gradient(to top, #7D8DFB 0%, #7678F1 20%, #7678F1 80%, #B6ADFD 100%)',
    height: "100%",
    position: "absolute",
    color: "white",
  },
  image: {
    width: 'auto',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0 ${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 3}px`,
  },
  banner: {
    fontSize: '1.5em',
  },
  bannerWords: {
    fontSize: '0.8em'
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',
    height: '3.5em',
  },
  center: {
    color: "white",
    marginTop: "0.5em",
    marginBottom:"0",
  },
  backIcon: {
    float: "left",
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    verticalAlign: "center",
  }
});

function AddHouse(props) {

  const {classes} = props;
  return (
    <main className={classes.main}>
      <ArrowBack className={classes.backIcon} onClick={props.history ? props.history.goBack: void(0)}/>
      <div className={classes.paper}>
        <div style={{textAlign: "left"}}>
          <Typography
            style={{
              marginTop: '20%',
              fontSize: '2em',
              color: "white",
            }}
            component="h1"
            variant="h5">
            Add your house
          </Typography>
          <Typography variant={"subtitle1"} style={{color: "white"}}>
            Add your house by loading report or entering the house information.
          </Typography>
        </div>

        <div className={classes.image}>
          <img src={houseURL} width={"100%"} alt={"house"}/>
        </div>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
          color="primary">
          <Link to={"/houseinfo"}>
          Enter information
          </Link>
        </Button>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
          color="primary">
          <Link to={"/housefile"}>
          Load report
          </Link>
        </Button>

        <Typography variant="subtitle1" gutterBottom className={classes.center}>
          {"Already add a house information?"}
        </Typography>

        <Typography variant="h6" gutterBottom className={classes.center}>
          <Link to={"/search/house"}>{"Search for it"}
          </Link>
        </Typography>
      </div>
    </main>
  );
}

AddHouse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddHouse);