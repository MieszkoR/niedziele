import React, { Component } from "react";
import PropTypes from "prop-types";
import tab from "./data";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  h: { color: "#00E676", marginLeft: "0.5em" },
  n: { color: "#FF1744", marginLeft: "0.5em" },
  tabl: { borderColor: "rgba(0, 0, 0, 0.25)" },
  div: {
    fontSize: "1.5em",
    lineHeight: "2.5em",
    overflow: "auto",
    marginBottom: "2em"
  },
  date: {
    textAlign: "right",
    marginRight: "0.5em"
  }
};

class Content extends Component {
  tableContent = (keys, classes) =>
    keys.map(current => (
      <tr>
        <td>
          <Typography variant="h4" className={classes.date}>
            {current}
          </Typography>
        </td>
        <td>
          {tab[current] ? (
            <Typography
              variant="h5"
              className={tab[current] ? classes.h : classes.n}
            >
              Jest
            </Typography>
          ) : (
            <Typography
              variant="h5"
              className={tab[current] ? classes.h : classes.n}
            >
              Nie jest
            </Typography>
          )}
        </td>
      </tr>
    ));

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.div}>
          <table
            rules="cols"
            cellPadding="15"
            className={classes.tabl}
          >
            {this.tableContent(Object.keys(tab), classes)}
          </table>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);