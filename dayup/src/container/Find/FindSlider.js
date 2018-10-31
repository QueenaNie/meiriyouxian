import React from "react"
import {connect} from "react-redux";
import actions from "../../store/action/home"
import ReactSwipe from "react-swipe";
import Loading from "../../component/Loading/Loading"
 class FindSlider extends React.Component{
    constructor() {
        super();
        this.state = {index: 0}
    }
    componentDidMount(){
        this.props.getSlider();
        // console.log(this.props.sliders);
        
    }
    render() {
        let option = {
            continuous: true,
            auto: 2000,
            callback: (index) => {
                this.setState({index})
            }
        }
        return <div className="banner">
            <div className="home-swipe">
            {this.props.sliders.length>0?
            <ReactSwipe className="carousel" swipeOptions={option} key={this.props.sliders.length}>
                {
                    this.props.sliders.map((item, index) => {
                        return <div key={index}>
                            <img src={item} alt={item}/>
                        </div>
                    })
                }
            </ReactSwipe>:<Loading/>}
            </div>
            <div className="banner-num">
              {this.props.sliders.map((item,index)=>{
                  return <div key={index}>{index == this.state.index ?
                  <p className="banner-num-info">{index+1}/4</p>:null}
                  </div>
              })}
            </div>
        </div>
    }
}
export default connect(state=>({...state.home}),actions)(FindSlider);