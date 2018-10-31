import React from "react";
let lowPrice=require("../../images/lowprice.jpg")
export default class VipGoods extends React.Component{
    render(){
        return <div className="goods">
               <div className="vip-title">
                   <div className="title-box">
                        会员专享商品5折起
                   </div>
               </div>
               <div className="product-info-list">
                     <img src={lowPrice} className="image-view"/>
               </div>
        </div>
    }
}