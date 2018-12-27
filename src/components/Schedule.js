import React, { Component, Fragment } from "react";
import tab from "./xddd";
import {withStyles} from "@material-ui/core/styles";


const Styles={
h:{
color:"#00E676"
 },
n:{
  color:"#FF1744"
 },
tabl:{
  borderColor:"rgba(0, 0, 0, 0.25)",
 },
 div:{
  fontSize:"24px",
  height:"700px",
  lineHeight:"2.5em",
  overflow:"auto",
  padding:"25px",
 }
}

let t=Object.keys(tab);

t=t.map(function callback(cur){
  return <tr>
    <td>{cur}</td>
    <td style={tab[cur]?Styles.h:Styles.n}>{tab[cur]?"Jest":"Nie jest"}</td>
    </tr>
});

class Content extends Component {
  render() {
    return(
      <center Style="font-family:Roboto;">
        <div style={Styles.div}>
    <table rules="cols"cellpadding="9"frame="void" style={Styles.tabl}>
      {t} 
    </table>
        </div>
      </center>
    )
  }
}
export default withStyles(Styles)(Content);
