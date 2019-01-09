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
  "device": "",
  "house": "",
};

class Item extends React.Component {
  componentDidMount() {
    console.log("usage: " + this.props.use);
  }
  render() {
    const {classes, content, type, jumpTo} = this.props;

    return (
      <Link to={{
        pathname: jumpTo,
        state: {...this.props}
      }}>
        <ListItem button className={classes.listItem} >
          <Avatar className={classes.avatar} src={(type === "house" || type === "device") ? content.img : ""}>
            {icons[type]}
          </Avatar>
          <ListItemText primary={content.title} secondary={content.detail} />
        </ListItem>
      </Link>
    )
  }
    
}

export default withStyles(styles)(Item);