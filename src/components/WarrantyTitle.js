import React from "react";
import {ArrowBack, EventNote} from "@material-ui/icons";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  title: {
    paddingTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 6,
    width: '100%',
    display:'inline-block',
  },
  backIcon: {
    float: "left",
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    verticalAlign: "center",
  }
});

function WarantyTitle(props){
  const {classes} = props;
  const {history} = props;
  return (
    <div className={classes.title}>
      <ArrowBack className={classes.backIcon} onClick={history ? history.goBack: void(0)}/>
      <h3 style={{verticalAlign: "middle",}}><EventNote style={{verticalAlign:"middle"}}/> Order</h3>
    </div>
  );
}


WarantyTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WarantyTitle);
