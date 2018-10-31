import React, {Component} from "react"

import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

export default class HomeNav extends Component {
    constructor() {
        super();
        this.state = {
            flag: true,
        }
    }
    changebtn = () => {
        this.setState({flag: !this.state.flag})
    };
    componentDidUpdate() {
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: "auto",
        })
    }
    render() {
        return <div className="home-nav">
            {this.state.flag ?
                <div className="nav-pre">
                <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                        {this.props.nav.map((item, index) => {
                           return  <div className="swiper-slide nav-slide " key={index}><NavLink to={`/home${item.hash}`}><span>{item.title}</span></NavLink></div>})}
                    </div>
                </div>
                <div className="nav-btn" onClick={this.changebtn}></div>
            </div> : <div className="big-nav">
                <h3>全部商品 <i onClick={this.changebtn}></i></h3>
                <ul>
                    {this.props.nav.map((item, index) => {
                        return <li key={index}>
                            <img src={item.img} alt=""/>
                            <h4>{item.title}</h4>
                        </li>
                    })}
                </ul>
            </div>}
        </div>
    }

}
