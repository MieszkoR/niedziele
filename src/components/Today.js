import React, { Component } from "react";
import PropTypes from "prop-types";
import tab from "./data";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const style = {
  handlowa: { color: "#00E676" },
  niehandlowa: { color: "#FF1744" }
};

class Content extends Component {
  state = {
    kiedy: "Dzisiejsza niedziela",
    czy: true,
    hm: "jest"
  };

  czyniedziela() {
    let today = new Date();
    if (today.getDay() !== 0) {
      this.setState({ kiedy: "Najbliższa niedziela" });
      today.setDate(today.getDate() + (7 - today.getDay()));
    }
    let data =
      today.getDate().toString() +
      "." +
      (today.getMonth() + 1).toString() +
      "." +
      today.getFullYear().toString();

    if (tab[data] === false) {
      this.setState({ czy: false });
      this.setState({ hm: "nie jest" });
    }
  }

  componentDidMount() {
    this.czyniedziela();
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" alignItems="center" spacing={16}>
        <Grid item>
          <Typography variant="h4">{this.state.kiedy}</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h1"
            className={this.state.czy ? classes.handlowa : classes.niehandlowa}
          >
            {this.state.hm}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">handlowa</Typography>
        </Grid>
      </Grid>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(Content);
