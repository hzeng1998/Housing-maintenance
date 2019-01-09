import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../static/image/Store.jpg'
import TopBar from '../TopBar';

const styles = (theme) =>({
  card: {
    width: "90%",
    textAlign: 'left',
    margin: '0 auto',
    marginTop: theme.spacing.unit * 2,
    borderRadius: 8,
    boxShadow: '5px 5px 25px 0px rgba(150,150,150,0.75)',
  },
  media: {
    objectFit: 'cover',
  },
  btn: {
    background: 'linear-gradient(to top right, #8E9BFF 0%, #D16DE4 100%)',
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  }
});

class SupplierInfo extends React.Component {
  state = {
    info: this.props.location.state,
  }

  componentDidMount() {
    console.log(this.props.location.state);
  }
  
  render()
  {
    const {classes} = this.props;
    return (
      <div>
        <TopBar title="Supplier Info"/>
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
            <Link to={{pathname: "/house/maintain/order", state: {...this.state.info}}}>
            <Button variant="contained" component="span" color="primary" className={classes.btn}>
              Order Now
            </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
      );
  }
};

SupplierInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SupplierInfo);
