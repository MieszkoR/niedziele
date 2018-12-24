import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import tab from "./Data";

const styles = {
  canTrade: {
    color: "#00E676"
  },
  cannotTrade: {
    color: "#FF174"
  }
};

class Content extends Component {
  state = {
    isSunday: false,
    label: "najbliższa",
    trade: false
  };

  isItSundayToday() {
    const today = new Date();
    const weekday = today.getDay();
    this.setState({
      isSunday: weekday === 0,
      label: weekday === 0 ? "dzisiejsza" : "najbliższa"
    });
  }

  isTradeSunday() {
    const today = new Date();
    const nearestSunday =
      today.getDate().toString() +
      "." +
      (today.getMonth() + 1).toString() +
      "." +
      today.getFullYear().toString();
    this.setState({
      trade: tab[nearestSunday]
    });
  }

  componentDidMount() {
    this.isItSundayToday();
    this.isTradeSunday();
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography variant="h6">
          {this.state.label} niedziela
        </Typography>
        <Typography
          variant="h1"
          className={this.state.trade ? classes.canTrade : classes.cannotTrade}
        >
          {this.state.trade ? "JEST" : "NIE JEST"}
        </Typography>
        <Typography variant="h6">handlowa</Typography>
      </Fragment>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
