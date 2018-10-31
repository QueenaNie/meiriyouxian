import React from "react";
let flesh=require("../../images/img_20170601002437822.png")
let vip=require("../../images/vip-header-icon.3b7c454.png")
export default class VipInfo extends  React.Component{
     render(){
         return <div className="non-vip">
            <div className="vip-info">
                <div className="vip-user-info">
                   <img src={flesh} className="user-header"/>
                   <img src={vip} className="vip-icon"/>

                       <span className="go-buy-vip">立即开通</span>

                </div>
                <div className="vip-info-text">
                    <span>成为会员每年可节省</span>
                    <span className="money">1121.30</span>
                    <span>元</span>
                </div>
            </div>

         </div>
     }
}