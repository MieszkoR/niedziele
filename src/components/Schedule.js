import React, { Component, Fragment } from "react";
import tab from "./xddd";
let el;

let tab2=[];
let j=0;
for(let i=0;i<23;i++){
  if(tab[j+1]==="tak"){
  el=<td STYLE="color:green">{tab[j+1]} </td>;
  }else{
    el=<td STYLE="color:red;">{tab[j+1]} </td>;
  }
tab2[i]=<tr STYLE="font-size:x-large"><td>{tab[j]}</td> {el}</tr>;
j+=2;

}

class Content extends Component {
  render() {
    
    return(
      <center>
        <div STYLE="100%;height:800px;line-height:3em;overflow:auto;padding:5px;">
    <table rules="cols"cellpadding="8">
      {tab2}
    </table>
    </div>
    </center>
    )
  }
}

export default Content;
