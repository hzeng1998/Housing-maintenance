import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ShopIcon from '@material-ui/icons/Shop';

const styles = theme => ({
    listItem: {
      borderRadius: 8,
      boxShadow: '0px 2px 30px 0px rgba(180,180,180,0.6)',
      marginBottom: 15,
      width: '90%',
      margin: '0 auto',
    },
    avatar: {
      background: 'linear-gradient(to top right, #8E9BFF 0%, #D16DE4 100%)',
    }
});


function Item(props) {
    const {classes, content, values} = props;
    return (
      <Link to={{pathname: '/house/maintain/supplier_info', 
      state: {values: {values}, supplier: {content}
      }}}>
        <ListItem button className={classes.listItem}>
        <Avatar className={classes.avatar}>
          <ShopIcon />
        </Avatar>
        <ListItemText primary={content.name} secondary={"Rating: " + content.star} />
      </ListItem>
      </Link>
      
    )
}

export default withStyles(styles)(Item);