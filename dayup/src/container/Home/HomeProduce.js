import React, {Component} from "react"
import img7 from "../../imagesHome/img7.png"
import "./index.less"

export default class HomeProduce extends Component {
    render() {
       console.log(this.props);
        return <div className="home-produce">
            {
                this.props.produce.list.map((item, index) => {
                    if(item.icon){
                        return <div className="produce-slide" key={index}>
                            <div className="produce-img">
                                <img src={item.url} alt=""/>
                            </div>
                            <div className="produce-col">
                                <div className="produce-title">
                                    <p className="title">{item.title}</p>
                                    <p className="msg">{item.msg}</p>

                                </div>
                                <div className="produce-icon">
                                    <div><img src={item.icon} alt=""/>
                                        <span>{item.iconmsg}</span>
                                    </div>
                                </div>
                                <div className="produce-price">
                                    <span className="price1">{item.price1}</span>
                                    <span className="price2">{item.price2}</span>
                                    <img src={img7} alt=""/>
                                </div>

                            </div>
                        </div>
                    }else{
                        return <div className="produce-slide" key={index}>
                            <div className="produce-img">
                                <img src={item.url} alt=""/>
                            </div>
                            <div className="produce-col">
                                <div className="produce-title">
                                    <p className="title">{item.title}</p>
                                    <p className="msg">{item.msg}</p>
                                </div>
                                <div className="produce-icon">
                                </div>
                                <div className="produce-price">
                                    <span className="price1">{item.price1}</span>
                                    <span className="price2">{item.price2}</span>
                                    <img src={img7} alt=""/>
                                </div>
                            </div>
                        </div>
                    }

                })
            }
        </div>
    }
}


