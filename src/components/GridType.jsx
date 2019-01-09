import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

class GridType extends React.Component {
    state = {
        category: this.props.category,
        icon: this.props.icon,
    }

    render() 
    {
        const {classes} = this.props;
       
        return (
            <Grid item xs={4}>
                <Link to={{
                    pathname: "/house/device_list",
                    state: {category: this.props.category}  //维修类型：wood/elctricity
                }}> 
                    <CardActionArea className={classes.block}>
                        {this.props.icon}
                        <Typography className={classes.text}>
                            {this.props.category}
                        </Typography>
                    </CardActionArea>
                </Link>
            </Grid>
        )
    }
}

export default withStyles(styles)(GridType);