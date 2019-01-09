import React from 'react';
import ItemList from './ItemList'
import MainMenu from './MainMenu'

const notes = [
    {title: "Repair order", time: "Tomorrow 15:00"},
    {title: "Alarm Garden Maintain",time: "5 days later"},
    {title: "Pipe maintain", time: "2019-1-20"},
];

class HomePage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      actions:[],
    }
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

    return(
      <div>
        <MainMenu />
        {actions.length ?
          actions.map((action) =>
            <ItemList
              items = {
                action.type === "alarm" ? [{"title": action.Name, "detail": action.Time}]
                  : [{"title": action.Name, "detail": action.Problem,}]
              }
              listType={action.Action}
              use={"/show_" + action.Action}
            />) : ""}
      </div>
            
    );
  }
}

export default HomePage;