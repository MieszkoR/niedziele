import React, { Component, Fragment } from "react";
import tab from "./xddd";
import { Schedule, Today } from ".";
import {withStyles} from "@material-ui/core/styles";


const style={
  handlowa:{
    color:"#00E676",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    fontSize: "72px",
    margin:"0",
    fontWeight: "bold",
  },
  niehandlowa:{
   color:"#FF1744",
   fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    fontSize: "72px",
    margin:"0",
    fontWeight: "bold",
  },
  normal:{
    fontStyle: "normal",
    fontWeight: "normal",
  }, 
}
let s="font-family:Roboto;margin-top:11%";

class Content extends Component {
  
State={
kiedy:"Dzisiejsza niedziela",
czy:true,
hm:"jest"
}

  render() {
    
    return(
    <center STYLE={s}>

   <h2 style={style.normal}>{this.State.kiedy}</h2>

<h1 style={this.State.czy ? style.handlowa:style.niehandlowa}>{this.State.hm}</h1>

<h2 style={style.normal}>handlowa</h2>

    </center>

   )  
  }
czyniedziela(){
  
  let today = new Date;
  if(today.getDay()!==0){
    
    this.setState({kiedy:"Najbliższa niedziela"});
    this.State.kiedy="Najbliższa niedziela";
    today.setDate(today.getDate()+(7-today.getDay()));
    
  }
  let data=today.getDate().toString()+"."+(today.getMonth()+1).toString()+"."+today.getFullYear().toString();
  
  if(!tab[data]){
   
    this.State.czy=false;
    this.State.hm="nie jest";
    }
}

componentDidMount(){
 
  this.czyniedziela();
  
}

}

export default withStyles(style)(Content);