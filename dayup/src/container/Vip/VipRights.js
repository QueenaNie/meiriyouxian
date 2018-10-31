import React from "react";
let icon=require("../../images/icon1.png");
let icon2=require("../../images/icon2.png");
let icon3=require("../../images/icon3.png");
let icon4=require("../../images/icon4.png");
let icon5=require("../../images/icon5.png");
export default class VipRights extends React.Component{
    render(){
        return <div className="rights-box">
           <div className="vip-icon">
                 <div className="icon-item">
                      <img src={icon}/>
                      <span className="icon-text">购物返现5%</span>
                 </div>
                 <div className="icon-item">
                      <img src={icon2}/>
                      <span className="icon-text">会员专享价</span>
                 </div>
                 <div className="icon-item">
                      <img src={icon3}/>
                      <span className="icon-text">1小时送达</span>
                 </div>
                 <div className="icon-item">
                      <img src={icon4}/>
                      <span className="icon-text">专属红包</span>
                 </div>
                 <div className="icon-item">
                      <img src={icon5}/>
                      <span className="icon-text">专属客服</span>
                 </div>
           </div>
        </div>
    }
}