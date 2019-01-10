import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ItemList from "../../components/ItemList";
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

class AlarmList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      msg: "",
      actions: [],
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  getAlarmInfo = () => {

    let opts = {
      method: "post",
      body: JSON.stringify({"token": sessionStorage.getItem("__content_token")}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };

    fetch("/alarms_list", opts)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.status) {
          this.setState({actions: data.data});
          console.log(this.state.actions);
        } else
          console.log("fetch error");
      })
      .catch(err => console.log(err));

  };

  componentDidMount() {
    this.getAlarmInfo();
  }

  render() {
    const {classes} = this.props;
    const alarms = this.state.actions || [];
    const {open, msg} = this.state;

    return(
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Alarm</h3>
        </div>
        {alarms.length ?
          <ItemList
            items={
              alarms.map((alarm) => {
                return {
                  "title": alarm.Name,
                  "detail": alarm.Time,
                };})}
            listType={"alarm"}
            use={"/show_alarm"}/> : ""}


        <Fab size= "small" aria-label="Add" className={classes.fab}>
          <Link to={"/house/alarm/select_device"}> <AddIcon /> </Link>
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


AlarmList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlarmList);