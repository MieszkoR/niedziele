import React, { Component, Fragment } from "react";
import tab from "./xddd";
import { Schedule } from ".";

  let t=false;
  var now = new Date();
  
  let day=now.getUTCDay(); //który dzień tygodnia
  let brak=7-day; //ile zostało dni do niedzieli
  if(brak!==0){ //czy jest niedziela
  let tru=now.getDate(); //który dzień miesiąca
  tru+=brak; //najbliższa niedziela
  now.setDate(tru); 
}else t=true;

var sunday = now.getDate().toString() +'.'+ (now.getMonth()+1).toString() +'.'+now.getFullYear().toString(); 




let kiedy;
if(t){
  kiedy=<h1>Dzisiejsza niedziela</h1>;
}else{
  kiedy=<h1 STYLE="margin-bottom:0">Następna niedziela</h1>;
}
if(tab[tab.indexOf(sunday)+1]==="tak"){
  
   
  
   sunday=<h1 STYLE="color:green">jest</h1>;
}
  else{
  sunday=<h1 STYLE="color:red">nie jest</h1>;
}


class Content extends Component {
  
  
  render() {
    return (
      <center>
        <br/>
      {kiedy}
      <br/>
      {sunday}
      <br/>
      <h1 STYLE="margin-top:0">handlowa</h1>

      </center>
      
      
      
      );
  }
}




export default Content;
