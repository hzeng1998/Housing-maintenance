import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BuildIcon from '@material-ui/icons/Build';
import SetIcon from '@material-ui/icons/Settings';
import FlashIcon from '@material-ui/icons/FlashOn';
import LightIcon from '@material-ui/icons/Flare';
import TVIcon from '@material-ui/icons/Tv';
import WaterIcon from '@material-ui/icons/Opacity';
import FoodIcon from '@material-ui/icons/LocalDining';
import HomeIcon from '@material-ui/icons/Domain';
import WallIcon from '@material-ui/icons/Album';
import GridType from './GridType';


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

const grids = [
	{ "type": "pipe", "icon":< BuildIcon fontSize='large'/>,},
	{ "type": "electricity", "icon":< FlashIcon fontSize='large'/>,},
	{ "type": "hardware", "icon":< TVIcon fontSize='large'/>,},
	{ "type": "wallpaper", "icon":< WallIcon fontSize='large'/>,},
	{ "type": "wooden", "icon":< LightIcon fontSize='large'/>,},
	{ "type": "building", "icon":< HomeIcon fontSize='large'/>,},
	{ "type": "kitchen", "icon":< FoodIcon fontSize='large'/>,},
	{ "type": "bathroom", "icon":< WaterIcon fontSize='large'/>,},
	{ "type": "others", "icon":< SetIcon fontSize='large'/>,},
];

class GridMenu extends React.Component {
	render() {
		const { classes, action} = this.props;
		return (
			<div className={classes.root}>
					<Grid container spacing={16}>
					{ grids.map((grid, index) => 
							<GridType key={index} category={grid.type} icon={grid.icon} action={action}/>
						)
					}
					</Grid>
			</div>
		)
	}
}

GridMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridMenu);
