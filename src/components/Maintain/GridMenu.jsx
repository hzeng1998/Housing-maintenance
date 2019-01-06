import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import SetIcon from '@material-ui/icons/Settings';
import FlashIcon from '@material-ui/icons/FlashOn';
import LightIcon from '@material-ui/icons/Flare';
import TVIcon from '@material-ui/icons/Tv';
import WaterIcon from '@material-ui/icons/Opacity';
import FoodIcon from '@material-ui/icons/LocalDining';
import HomeIcon from '@material-ui/icons/Domain';
import WallIcon from '@material-ui/icons/Album';
import CardActionArea from '@material-ui/core/CardActionArea';

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

function GridMenu(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={16}>
				<Grid item xs={4}>
							<CardActionArea className={classes.block}>
								<BuildIcon className={classes.icon}/>
								<Typography className={classes.text}>pipe</Typography>
							</CardActionArea>
            </Grid>
            <Grid item xs={4}>
							<CardActionArea className={classes.block}>
								<FlashIcon className={classes.icon}/>
								<Typography className={classes.text}>electrcity</Typography>
							</CardActionArea>
            </Grid>
            <Grid item xs={4}>
							<CardActionArea className={classes.block}>
								<TVIcon className={classes.icon}/>
								<Typography className={classes.text}>hardware</Typography>
							</CardActionArea>
            </Grid>
            <Grid item xs={4}>
							<CardActionArea className={classes.block}>
								<LightIcon className={classes.icon}/>
								<Typography className={classes.text}>wooden</Typography>
							</CardActionArea>
            </Grid>
            <Grid item xs={4}>
							<CardActionArea component={Link} to="/house/maintain/supplier_list" className={classes.block}>
								<WallIcon className={classes.icon}/>
								<Typography className={classes.text} >wallpaper</Typography>
							</CardActionArea>
            </Grid>
            <Grid item xs={4}>
							<CardActionArea className={classes.block}>
								<HomeIcon className={classes.icon}/>
								<Typography className={classes.text}>building</Typography>
							</CardActionArea>
            </Grid>
            <Grid item xs={4}>
							<CardActionArea className={classes.block}>
								<FoodIcon className={classes.icon}/>
								<Typography className={classes.text}>kitchen</Typography>
							</CardActionArea>
            </Grid>
            <Grid item xs={4}>
							<CardActionArea className={classes.block}>
								<WaterIcon className={classes.icon}/>
								<Typography className={classes.text}>bathroom</Typography>
							</CardActionArea>
            </Grid>
						<Grid item xs={4}>
							<CardActionArea className={classes.block}>
								<SetIcon className={classes.icon}/>
								<Typography className={classes.text}>others</Typography>
							</CardActionArea>
            </Grid>
        </Grid>
    </div>
  );
}

GridMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridMenu);
