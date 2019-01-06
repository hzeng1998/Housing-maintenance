import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#eeeeee',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
    margin: '0 auto',
    marginTop: theme.spacing.unit * 5,
    width: '80%',
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


class SearchBar extends React.Component {
    render() {
      const {classes} = this.props;
      return (
        <div className={classes.search}>
          <InputBase
            placeholder="Select your device"
          />
          <IconButton color="primary" aria-label="search">
            <SearchIcon />
          </IconButton>
      </div>
    )
  }
}

export default withStyles(styles)(SearchBar);