import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../static/image/UI.png'

const styles = {
  card: {
    width: "100%",
    textAlign: 'left',
  },
  media: {
    objectFit: 'cover',
  },
};

class SupplierInfo extends React.Component {
  render()
  {
      const {classes} = this.props;
    return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="house UI"
              className={classes.media}
              height="20%"
              image={img}
              title="house UI"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Yale Repair Store
              </Typography>
              <Typography component="p">
                Yale Repair Store is a popular house maintenance store in US. 
                We provide professional service including hardware and software supply.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" component="span" color="primary">
              Order Now
            </Button>
          </CardActions>
        </Card>
      );
  }
};

SupplierInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SupplierInfo);
