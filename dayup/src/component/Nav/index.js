import React, {Component} from "react"

import {NavLink} from "react-router-dom"
import "./index.less"
export  default  class Nav extends Component{
    render(){
        return <div className="nav-home">
            <NavLink to={'/home'}  >
                <i className='iconfont icon-shouye'></i>
                <span>首页</span>
            </NavLink>
            <NavLink to={'/vip'}   >
                <i className='iconfont icon-huiyuan'></i>
                <span>会员+</span>
            </NavLink>
            <NavLink to={'/find'}   >
                <i className='iconfont icon-faxian'></i>
                <span>发现</span>
            </NavLink>
            <NavLink to={'/carts'}   >
                <i className='iconfont icon-ziyuan'></i>
                <span>购物车</span>
            </NavLink>
            <NavLink to={'/mine'}   >
                <i className='iconfont  icon-weibiaoti-_huabanfuben'></i>
                <span>我的</span>
            </NavLink>
        </div>
    }
}



 