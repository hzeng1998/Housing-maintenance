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
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 1,
      backgroundColor: theme.palette.background.paper,
    },
});


class ItemList extends React.Component {
  
  render() {
    const {classes, items} = this.props;
    return (
      <List className={classes.list}>
        { items.map( (item, index) =>
            <Item key={index} content={item}/>
          )}
      </List>
    );
  }
}

ItemList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemList);;
