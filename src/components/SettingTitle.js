import React from "react";
import {Settings} from "@material-ui/icons";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  title: {
    paddingTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 6,

    width: '100%',
    display:'inline-block',
    // boxShadow: '0px 2px 20px 0px rgba(180,180,180,0.6)',
  },
});

function SettingTitle(props){
  const {classes} = props;
  return (
  <div className={classes.title}>
    <h3 style={{verticalAlign: "middle",}}><Settings style={{verticalAlign:"middle"}}/> Setting</h3>
  </div>
  );
}


SettingTitle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingTitle);


