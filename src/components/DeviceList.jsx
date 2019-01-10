import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ItemList from "./ItemList";
import {Link} from "react-router-dom";
import {Snackbar} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    container: {
        verticalAlign: 'middle',
    },
    title: {
        paddingTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        color: '#aaaaaa',
        width: '100%',
    },
    fab: {
        marginTop: theme.spacing.unit * 10,
    }

});


function actionPath(action) {
    if(action === "maintain")
        return "/house/maintain/supplier_list";
    else if(action === "alarm")
        return "/house/alarm/set";
    else
        return "/show_device";
}

class DeviceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            msg: "",
            devices: [],
        };
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    getDeviceInfo = () => {

        let opts = {
            method: "post",
                body: JSON.stringify({"token": sessionStorage.getItem("__content_token"), "Type": this.props.location.state.category}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        fetch("/divices_list", opts)
          .then(res => {
              return res.json();
          })
          .then(data => {
              if (data.status) {
                  this.setState({devices: data.data});
                  console.log(this.state.devices);
              } else
                  console.log("fetch error");
          })
          .catch(err => console.log(err));

    };

    componentDidMount() {
        this.getDeviceInfo();
    }

    componentWillUnmount(){
        this.setState = (state,callback) => {
            return;
        };
    }

    render() {
        const {classes} = this.props;
        const devices = this.state.devices || [];
        const {open, msg} = this.state;
        console.log(this.props.location.state.category);
        const nextJump = actionPath(this.props.location.state.action);

        return(
          <div className={classes.container}>
              <div className={classes.title}>
                  <h3>Devices</h3>
              </div>
              {devices.length ?
                <ItemList
                  items={
                      devices.map((device) => {
                          return {
                              "id": device.divice_id,
                              "img": device.divice_img,
                              "title": device.Name,
                              "detail": device.Brand,
                          };})}
                  listType={"device"}
                  use={nextJump}/> : ""}
                                
              <Fab size= "small" aria-label="Add" className={classes.fab}>
                  <Link to={
                      {
                          pathname:"/adddevice",
                          state: {
                              "category": this.props.location.state.category,
                          }
                      }
                  }> <AddIcon /> </Link>
              </Fab>

              <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'snackbar-fab-message-id',
                    className: classes.snackbarContent,
                }}
                message={<span id="snackbar-fab-message-id">{msg}</span>}
                action={
                    <Button color="inherit" size="small" onClick={this.handleClose}>
                        {"OK"}
                    </Button>
                }
                className={classes.snackbar}
              />
          </div>
        );
    }
}


DeviceList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeviceList);