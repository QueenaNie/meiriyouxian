import React from "react";
let redone=require("../../images/redone.png")
let redtwo=require("../../images/redtwo.png")
export default class VipRedpack extends React.Component{
    render(){
        return <div>
                   <div className="redpack-box">
              <img src={redone}/>
              <img src={redtwo}/>
        </div> 
        </div>

    }
}