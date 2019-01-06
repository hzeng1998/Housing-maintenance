import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import GridMenu from "../components/Maintain/GridMenu";

const styles = theme => ({
  container: {
    verticalAlign: 'middle',
  },
  title: {
    paddingTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 6,
    color: '#aaaaaa',
    width: '100%',
    // boxShadow: '0px 2px 20px 0px rgba(180,180,180,0.6)',
  },
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 2,
  },
  block: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    textAlign: 'center',
    color: '#ffffff',
    boxShadow: '5px 5px 15px 0px rgba(150,150,150,0.75)',
    background: '#8E9BFF',
  },
  icon: {
    paddingTop: theme.spacing.unit * 2,
    fontSize: 40,
  },
  text: {
    color: "#ffffff",
  }
});

class ManageDevices extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Setting</h3>
          <p>Select the type of maintenance you want</p>
        </div>
        <GridMenu/>
      </div>
    );
  }
}

export default withStyles(styles)(ManageDevices);