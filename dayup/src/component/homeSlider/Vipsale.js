import React, {Component} from "react"
import {connect} from "react-redux";
import actions from "../../store/actions/home";
import HomSlider from "../../container/Home/HomeSlider"
 class Vipsale extends Component{
    constructor(){
        super();
        this.state={id:2}
    }
    componentDidMount(){
        this.props.homeSlider();
    }
    render (){
        return <div className="vipsale">
            <HomSlider id={this.state.id} slider={this.props.homeSlider1}/>
        </div>
    }
}

export default connect(state=>({...state.home}),actions)(Vipsale)

 