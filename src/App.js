import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Link, Route } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid
} from "@material-ui/core";

import { Today, Schedule } from "./components";

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 20
  },
  content: {
    marginTop: "5em"
  }
};

class App extends Component {
  state = {
    todayButton: {
      variant: "default",
      color: "inherit"
    },
    scheduleButton: {
      variant: "contained",
      color: "primary"
    }
  };

  handleChange = location => {
    if (location === "today") {
      this.setState({
        todayButton: {
          variant: "default",
          color: "inherit"
        },
        scheduleButton: {
          variant: "contained",
          color: "primary"
        }
      });
    } else {
      this.setState({
        todayButton: {
          variant: "contained",
          color: "primary"
        },
        scheduleButton: {
          variant: "default",
          color: "inherit"
        }
      });
    }
  };
  
  render() {
    
    const { classes } = this.props;
    return (
      <BrowserRouter >
    
        <Fragment>
          <CssBaseline />
          <AppBar position="fixed" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Niedziele
              </Typography>
              <div className={classes.grow} />
              <Button
                className={classes.menuButton}
                variant={this.state.todayButton.variant}
                color={this.state.todayButton.color}
                component={Link}
                to="/"
                onClick={() => this.handleChange("today")}
              >
                DZISIAJ
              </Button>
              <Button
                variant={this.state.scheduleButton.variant}
                color={this.state.scheduleButton.color}
                component={Link}
                to="/rozklad"
                onClick={() => this.handleChange("schedule")}
              >
             
                ROZKŁAD
              </Button>
            </Toolbar>
          </AppBar>
          <Grid container justify="center" className={classes.content}>
            <Route exact path="/" component={Today} />
            <Route path="/rozklad" component={Schedule} />
          </Grid>
        </Fragment>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    if((document.URL==="http://localhost:3000/rozklad")||(document.URL==="http://192.168.0.14:3000/rozklad")){
    this.setState({
      todayButton: {
        variant: "contained",
        color: "primary"
      },
      scheduleButton: {
        variant: "default",
        color: "inherit"
      }
    })
  }
}
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);