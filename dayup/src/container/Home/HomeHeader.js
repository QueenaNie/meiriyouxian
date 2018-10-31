import React, {Component} from "react"
import img1 from "../../imagesHome/img1.png"
import img2 from "../../imagesHome/img2.png"
export default class HomeHeader extends Component{
    render(){
        return <div className="home-header">
            <div className="head-text">
                <img src={img1} alt=""/>
                <div className="setion">
                    <span>北京市政府</span>
                </div>
            </div>
            <div className="head-search">
                <img src={img2} alt=""/>
                <span>搜索</span>
            </div>
        </div>
    }
}


 