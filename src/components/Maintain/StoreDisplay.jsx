import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import yellowstar from './yellowstar.png'
import greystar from './greystar.png'

const styles = theme => ({
    card: {
        maxWidth: 375,
        maxHeight: 812,
    },
    media: {
        height: 0,
        maxWidth: 350,
        paddingTop: '56.25%', // 16:9
        borderRadius: 40,
        margin: 'auto',
        verticalAlign: 'middle',
        alignItems: 'center',
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    root: {
        ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 1,
        // paddingBottom: theme.spacing.unit * 1,
        marginTop: 5,
        width: 150,
        height: 80,
    },
    storeInfo: {
        //font: 'Console',
        fontSize: 18,
        color: 'grey',
        marginTop: 'auto',
        //align: 'left',
    },
    order: {
        font: 'Bold',
        fontSize: 18,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 20,
        float: 'right',
        marginRight: 40,
        marginTop: 20,
        //margin: theme.spacing.unit,
        background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',
    },
    input: {
        display: 'none',
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    star: {
        height:30,
        width:30,
        float:'left',
    },
    detail: {
        textAlign: 'left',
    },
});

class SupplierInfo extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    title="Merchant"
                />
                <CardMedia
                    className={classes.media}
                    image="https://images1.epochhk.com/pictures/91445/%E6%9C%89%E6%9C%BA%E5%86%9C%E7%94%9C%E5%93%811@1200x1200.jpg"
                    title="Paella dish"
                />
                <Button variant="contained" color="primary" className={classes.button}>
                    <span className={classes.order}>Order</span>
                </Button>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <CardContent>
                    <Paper className={classes.root} elevation={1}>
                        <Typography className={classes.storeInfo}  variant="h5" component="h3">
                            Old Peace Service
                        </Typography>
                        <Typography component="p">
                        </Typography>
                        <div>
                            <img className={classes.star} src={yellowstar}  alt={1.1}/>
                            <img className={classes.star} src={yellowstar}  alt={1.2}/>
                            <img className={classes.star} src={yellowstar}  alt={1.3}/>
                            <img className={classes.star} src={greystar}  alt={2.1}/>
                            <img className={classes.star} src={greystar}  alt={2.2}/>
                            {/*<CardMedia*/}
                                {/*className={classes.star}*/}
                                {/*image="http://pic.90sjimg.com/design/00/23/31/57/58dd0622604b6.png"*/}
                            {/*/>*/}
                            {/*<CardMedia*/}
                                {/*className={classes.star}*/}
                                {/*image="http://pic.90sjimg.com/design/00/23/31/57/58dd0622604b6.png"*/}
                            {/*/>*/}
                        </div>
                    </Paper>
                    {/*<Typography component="p">*/}
                        {/*This impressive paella, if you like.*/}
                    {/*</Typography>*/}
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    {/*<IconButton aria-label="Add to favorites">*/}
                        {/*<FavoriteIcon />*/}
                    {/*</IconButton>*/}
                    {/*<IconButton aria-label="Share">*/}
                        {/*<ShareIcon />*/}
                    {/*</IconButton>*/}
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        more
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph className={classes.detail}>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph className={classes.detail}>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Add pimentón, bay leaves, garlic, tomatoes, onion,
                            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography className={classes.detail}>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

SupplierInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SupplierInfo);