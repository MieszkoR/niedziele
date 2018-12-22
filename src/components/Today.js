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
  kiedy=<h1 STYLE="font-family: Roboto;font-size: 24px;
  text-align: center;text-align: center;font-style: normal;
  font-weight: normal;">Dzisiejsza niedziela</h1>;
}else{
  kiedy=<h1 STYLE="margin-bottom:0;font-family:Roboto;font-size: 24px;
  text-align: center;text-align: center;font-style: normal;
  font-weight: normal;">Najbliższa niedziela</h1>;
}
if(tab[tab.indexOf(sunday)+1]==="tak"){
  
   
  
   sunday=<h1 STYLE="color: #00E676;font-size: 72px;font-family:Roboto;text-align: center;margin-top:0;margin-bottom:0">jest</h1>;
}
  else{
  sunday=<h1 STYLE="color:red;font-family:Roboto;text-align: center;margin-top:0;margin-bottom:0;">nie jest</h1>;
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
      <h1 STYLE="margin-top:0;font-family:Roboto;font-size: 24px;
  text-align: center;text-align: center;font-style: normal;
  font-weight: normal;">handlowa</h1>

      </center>
      
      
      
      );
  }
}




export default Content;
