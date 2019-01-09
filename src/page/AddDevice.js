import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CameraAlt from '@material-ui/icons/CameraAlt';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import {Snackbar} from "@material-ui/core";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',
  },
  form: {
    borderBottom: '#9370db',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  backIcon: {
    float: "left",
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    verticalAlign: "center",
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    background: 'linear-gradient(to top right, #7D8DFB 0%, #B6ADFD 100%)',

    boxShadow: '4px 6px 16px 2px #888888',
    height: '3.5em',
    marginBottom: theme.spacing.unit * 3,
    '&:hover': {
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: {useNextVariants: true},
});

class AddDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Brand: '',
      PurchaseTime: this.getNowFormatDate(),
      MaintainTime: this.getNowFormatDate(),
      open: false,
      msg: ""
    };
    this.inputRef = React.createRef();
    this.classes = props;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.chooseFile = this.choose.bind(this);
  }

  getNowFormatDate = () => {
    let date = new Date();
    let seperator = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    return year + seperator + month + seperator + strDate;
  };

  choose = () => {
    this.inputRef.current.click();
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (event) => {

    if (this.state.Name && this.state.Brand && this.state.PurchaseTime && this.state.file && this.state.MaintainTime) {

      let {Name, Brand, PurchaseTime, MaintainTime, file} = this.state;

      let data = new FormData();
      data.append("File", file);
      data.append("Name", Name);
      data.append("Brand", Brand);
      data.append("PurchaseTime", PurchaseTime);
      data.append("MaintainTime", MaintainTime);
      data.append("HouseName", sessionStorage.getItem("__current_house"));
      data.append("Type", this.props.location.state.category);

      const opts = {
        method: "post",
        body: data,
        mode: 'cors',
      };

      fetch("/divice_profile", opts)
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            this.setState({open: true, msg: "Add Device Information Succeed"});
            setTimeout(() => this.props.history.goBack(), 4000);
          }
        })
        .catch(e => {
          console.log(e);
        });


    } else {
      console.log("Incomplete");
      this.setState({open: true, msg: "Please Complete All of the Required Information"});
    }
    event.preventDefault();
  };

  uploadImage = (e) => {
    console.log("upload file "+ e.target.files[0]);
    console.log("file name:", e.target.files[0].name);
    this.setState({"file": e.target.files[0], filepath: URL.createObjectURL(e.target.files[0])});
  };

  render() {
    const {classes} = this.props;
    const {open, msg} = this.state;

    return (
      <main className={classes.main}>

        <div className={classes.paper}>

          <Grid container justify="flex-start">
            <Typography
              style={{
                marginTop: theme.spacing.unit * 3,
                fontSize: 26,
                color: '#535D7E',
                lineheight: 40,
                justifyContent: 'flex-start'
              }}
              component="h1"
              variant="h5">
              Add devices
            </Typography>
          </Grid>

          <Grid container style={{marginTop: 15}} justify="flex-start" alignItems="center">
            <div
              style={{
                backgroundColor: '#fffff',
                borderColor: '#B6ADFD',
                boxShadow: '0 0 0 0.1rem rgba(0,123,255,.5)',
                borderRadius: 40, padding: 5
              }}
              onClick={ this.chooseFile}>

              <Avatar className={classes.avatar} src={this.state.file ? this.state.filepath: ""}>
                {this.state.file ? "" : <CameraAlt/>}
              </Avatar>

            </div>
            <h5 style={{fontSize: 14, color: '#A9AEBE', marginLeft: 10}}>{this.state.file ? this.state.file.name : "Add Device Picture"}</h5>
          </Grid>

          <Typography variant={"subtitle1"} style={{textAlign:"left", color:"grey", marginTop: "1em"}}>Add device by entering basic information of the device</Typography>

          <form className={classes.form}>

            <MuiThemeProvider theme={theme}>

              <input type="file" name="profileImage" onChange={this.uploadImage} style={{display: 'none'}}
                     ref={this.inputRef}/>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="Name">Name</InputLabel>
                <Input id="Name" name="Name" value={this.state.Name} onChange={this.handleChange('Name')}
                       autoComplete="Name" autoFocus/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="Brand">Brand</InputLabel>
                <Input id="Brand" name="Brand" value={this.state.Brand} onChange={this.handleChange("Brand")}
                       autoComplete="Brand"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="PurchaseTime">Purchase Time</InputLabel>
                <Input type={"date"} id="PurchaseTime" name="Purchase Time" value={this.state.PurchaseTime}
                       onChange={this.handleChange("PurchaseTime")} autoComplete="time"/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="MaintainTime">Maintain Time</InputLabel>
                <Input type={"date"} id="PurchaseTime" name="Purchase Time" value={this.state.MaintainTime}
                       onChange={this.handleChange("MaintainTime")} autoComplete="time"/>
              </FormControl>
            </MuiThemeProvider>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              color="primary"
              onClick={this.handleSubmit}>
              Submit
            </Button>
          </form>

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
                OK
              </Button>
            }
            className={classes.snackbar}
          />

        </div>
      </main>
    );
  }
}


AddDevice.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDevice);