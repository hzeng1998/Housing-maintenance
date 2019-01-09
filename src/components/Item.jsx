import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ClockIcon from '@material-ui/icons/Schedule';
import OrderIcon from '@material-ui/icons/MonetizationOn';
import DeviceIcon from '@material-ui/icons/OfflineBolt';
import { Link } from 'react-router-dom';

const styles = theme => ({
    listItem: {
      borderRadius: 8,
      boxShadow: '0px 2px 30px 0px rgba(180,180,180,0.6)',
      marginBottom: 15,
    },
    avatar: {
      background: 'linear-gradient(to top right, #8E9BFF 0%, #D16DE4 100%)',
    }
});

const icons = {
  "alarm": <ClockIcon />,
  "order": <OrderIcon />,
  "device": <DeviceIcon />,
}

const paths = {
  "maintain": "/house/maintain/supplier_list",
}

class Item extends React.Component {
  componentDidMount() {
    //console.log("usage: " + this.props.use);
  }
  render() {
    const {classes, content, type, use} = this.props;
    const keys = Object.values(content);
    return (
      <Link to={{
        pathname: paths[use],
        state: {...this.props}
      }}>
      <ListItem button className={classes.listItem} >
        <Avatar className={classes.avatar}>
         {icons[type]}
        </Avatar>
        <ListItemText primary={keys[0]} secondary={keys[1]} />
      </ListItem>
      </Link>
    )
  }
    
}

export default withStyles(styles)(Item);