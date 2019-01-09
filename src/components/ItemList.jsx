import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from './Item'

const styles = theme => ({
    list: {
      width: '90%',
      height: '100%',
      maxWidth: 560,
      margin: '0 auto',
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 1,
      background: '#fafafa',
    },
});

class ItemList extends React.Component {
  state={
    items: this.props.items,
  };

  render() {
    const {classes, listType, use} = this.props;
    const {items} = this.state;
    console.log(items);
    return (
      <List className={classes.list}>
        { items.map( (item, index) =>
            <Item key={index} content={item} type={listType} jumpTo={use}/>
          )}
      </List>
    );
  }
}

ItemList.propTypes = {
  classes: PropTypes.object.isRequired,
  listType: PropTypes.string.isRequired,  //type:alarm/device/order/house
};

export default withStyles(styles)(ItemList);
