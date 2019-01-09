import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import BuildIcon from '@material-ui/icons/Build';
import SetIcon from '@material-ui/icons/Settings';
import FlashIcon from '@material-ui/icons/FlashOn';
import LightIcon from '@material-ui/icons/Flare';
import TVIcon from '@material-ui/icons/Tv';
import WaterIcon from '@material-ui/icons/Opacity';
import FoodIcon from '@material-ui/icons/LocalDining';
import HomeIcon from '@material-ui/icons/Domain';
import WallIcon from '@material-ui/icons/Album';

const styles = theme => ({
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

const link = "/house/device_list";

class GridType extends React.Component {
    state = {
        type: this.props.type,
        icon: this.props.icon,
    }

    render() 
    {
        const {classes} = this.props;
        return (
            <Grid item xs={4}>
                <Link to={link}> 
                    <CardActionArea className={classes.block}>
                        {this.state.icon}
                        <Typography className={classes.text}>
                            {this.state.type}
                        </Typography>
                    </CardActionArea>
                </Link>
            </Grid>
        )
    }
}

export default withStyles(styles)(GridType);