import React, {Component} from "react"
import VipInfo from "./VipInfo"
import VipRights from "./VipRights" 
import VipRedpack from "./VipRedpack"
import VipGoods from "./VipGoods"
import VipCarts from "./Vipcarts"
import "./index.less"
// let flesh=require("../../images/img_20170601002437822.png")
export default class Vip extends Component{
    render(){
        return <div>
            <VipInfo/>
            <VipRights/>
            <VipRedpack/>
            <VipGoods/>
            <VipCarts/>
        </div>
    }
}