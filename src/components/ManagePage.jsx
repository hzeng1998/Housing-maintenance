import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import DeviceIcon from '@material-ui/icons/FlashOn';
import HouseIcon from '@material-ui/icons/LocationCity';
import OrderIcon from '@material-ui/icons/EventNote';
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom";

const styles = theme => ({
  container: {
    verticalAlign: 'middle',
  },
  title: {
    paddingTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    color: '#aaaaaa',
    width: '100%',
    // boxShadow: '0px 2px 20px 0px rgba(180,180,180,0.6)',
  },
  block: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    textAlign: 'center',
    //backgroundColor: '#9896f1',
    color: '#ffffff',
    boxShadow: '0px 0px 20px 0px rgba(150,150,150,0.75)',
    background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',
  },
  icon: {
    paddingTop: theme.spacing.unit * 1,
    fontSize: 40,
  },
  text: {
    color: "#ffffff",
  },
  grid: {
    flexGrow: 1,
    margin: theme.spacing.unit * 3,
  }
});


class ManagePage extends React.Component {
  render() {
    const {classes} = this.props;
    return(
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Manage</h3>
          <p>Manage your devices or orders</p>
        </div>
        <div className={classes.grid}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Link to={"/addhouse"}>
              <CardActionArea className={classes.block}>
                <HouseIcon className={classes.icon}/>
                <Typography className={classes.text}>Houses</Typography>
              </CardActionArea>
              </Link>
            </Grid>
            <Grid item xs={12}><Link to={"/house/manage/devices"}>
              <CardActionArea className={classes.block}>
                <DeviceIcon className={classes.icon}/>
                <Typography className={classes.text}>Devices</Typography>
              </CardActionArea></Link>
            </Grid>
            <Grid item xs={12}>
              <CardActionArea className={classes.block}>
                <OrderIcon className={classes.icon}/>
                <Typography className={classes.text}>Orders</Typography>
              </CardActionArea>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ManagePage);