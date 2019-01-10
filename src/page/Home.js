import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import houseURL from '../static/image/UI.png';
import {Link} from 'react-router-dom';

import "../static/css/HomePage.css";

const styles = theme => ({
  main: {
    width: '100%',
    display: 'block', // Fix IE 11 issue.
    background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',
    height: "100%",
    position: "absolute",
    color: "white",
  },
  image: {
    width: 'auto',
  },
  next: {
    textAlign: 'right',
    width: '100%',
    paddingBottom: '2em',
    paddingRight: '1.5em',
    fontSize: '1.5em',
    position: "absolute",
    bottom: 0,
  },
  skip: {
    textAlign: 'right',
    width: '100%',
    paddingTop: '2em',
    paddingRight: '1.5em',
    fontSize: '1.5em',
  },
  banner: {
    fontSize: '1.5em',
  },
  bannerWords: {
    fontSize: '0.8em'
  }
});

function Home(props) {

  const {classes} = props;
  return (
    <main className={classes.main}>
      <div className={classes.skip}>
        <Link to={"/login"}> {"Skip"} </Link>
      </div>
      <div className={classes.image}>
        <img src={houseURL} width={"100%"} alt={"house"}/>
      </div>
      <div className={classes.banner}>
        Your best house assistant.
        <p className={classes.bannerWords}>We can ba la ba la</p>
      </div>
      <div className={classes.next}>
        <Link to={"/signup"}>{"Next"}</Link>
      </div>

    </main>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);