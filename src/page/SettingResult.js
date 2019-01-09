import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/es/Typography/Typography";
import {Link} from "react-router-dom";
import SettingTitle from "../components/SettingTitle";

const styles = theme => ({
  container: {
    verticalAlign: 'middle',
    background: 'linear-gradient(to top, #7D8DFB 0%, #B6ADFD 100%)',
    height:"100%",
    position:"absolute",
    width: "100%",
    color: 'white',
  },
});


function SettingResult(props) {
  const {classes} = props;

  return (
    <div className={classes.container}>
      <SettingTitle history={props.history}/>
      <Typography style={{
        color:"white",
        marginTop: "30%",
        marginBottom: "30%",
      }} variant={"h3"}>Submit Successfully!</Typography>

      <Typography style={{
        color:"white",
        marginTop: "30%",
        marginBottom: "30%",
      }} variant={"subtitle1"}><Link to={"/house/device_type"}>Turn to the devices list ></Link></Typography>
    </div>
  );
}


SettingResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingResult);