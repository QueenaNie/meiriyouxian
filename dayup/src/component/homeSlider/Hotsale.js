import React, {Component} from "react"
import {connect} from "react-redux";
import actions from "../../store/actions/home";
import HomSlider from "../../container/Home/HomeSlider"
import HomeCategory from  "../../container/Home/HomeCategory"
import img6 from "../../imagesHome/img6.gif"
import "./index.less"
import HomeProduce from "../../container/Home/HomeProduce";
import {loadMore,downRefresh} from  "../../utils-home"
 class Hotsale extends Component{
    constructor(){
        super();
        this.state={id:1}
    }
     componentDidMount(){
         this.props.homeSlider();
         this.props.homeCategory();
         this.props.homeProduce();
         loadMore(this.content,this.props.homeProduce);
         downRefresh(this.content,this.props.homeProduce)
     }
    render (){
        return <div className="hotsale">
             <HomSlider id={this.state.id} slider={this.props.homeSlider1}/>
            <HomeCategory category={this.props.homeCategory1}/>
            <div className="newbag">
                <img src={img6} alt=""/>
            </div>
            <div className="main-content" ref={(x)=>{this.content=x}}>
                <HomeProduce produce={this.props.homeProduce1} />
            </div>
        </div>
    }
}

export default connect(state=>({...state.home}),actions)(Hotsale)
 