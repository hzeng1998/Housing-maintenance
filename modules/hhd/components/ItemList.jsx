import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from './Item'

const styles = theme => ({
    list: {
      width: '90%',
      maxWidth: 560,
      margin: '0 auto',
      marginTop: theme.spacing.unit * 5,
      backgroundColor: theme.palette.background.paper,
    },
});


const items = [
  {title: "Repair order", time: "Tomorrow 15:00"},
  {title: "Alarm Garden Maintain",time: "5 days later"},
  {title: "Alarm Roof Maintain", time: "10 days later"},
]

class ItemList extends React.Component {
  
  render() {
    const {classes} = this.props;
    return (
      <List className={classes.list}>
        {
          items.map( item =>
            <Item content={item}/>
          )
        }
      </List>
    );
  }
}

ItemList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemList);;
