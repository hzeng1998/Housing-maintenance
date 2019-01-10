import React from 'react';
import MainMenu from './MainMenu'
import Item from "./Item";
import List from '@material-ui/core/List';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
  list: {
    width: '100%',
    height: '100%',
    maxWidth: 560,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 1,
    background: '#fafafa',
  },
});

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      actions:[],
    }
  }

  componentDidMount() {
    this.getActionInfo()
  }

  componentWillUnmount(){
    this.setState = (state,callback) => {
      return;
    };
  }

  getActionInfo = () => {

    let opts = {
      method: "post",
      body: JSON.stringify({"token": sessionStorage.getItem("__content_token")}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };

    fetch("/actions_list", opts)
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

  render() {

    const {actions} = this.state;
    const {classes} = this.props;

    return(
      <div>
        <MainMenu />
        <List className={classes.list}>
          {actions.length ?
            actions.map((action, index) =>
              <Item
                key ={index}
                content = {
                  action.Action === "alarm" ? {"title": action.Name, "detail": action.Time}
                    : {"title": action.Name, "detail": action.Problem,}
                }
                type={action.Action}
                jumpTo={"/show_" + action.Action}
              />) : ""}
        </List>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);