import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    textTransform: 'none',
  },
  input: {
    display: 'none',
  },
});

function TextButtons(props) {
  const { classes } = props;
  return (
    <div>
      <span>
      <Button disabled className={classes.button}>
        Haven't add the device?
      </Button>
      </span>
      <br />
        <span>
        <Button color="primary" href="#text-buttons" className={classes.button}>
         Add the devices
     </Button>
        </span>

</div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);
