import React, {Component} from "react"
import "./index.less"
import HomeHeader from "./HomeHeader"
import HomeNav from "./HomeNav";
import NavRouter from "./NavRouter"
import {connect} from "react-redux"
import actions from "../../store/actions/home"
 class Home extends Component {
    componentDidMount(){
        this.props.homeNav();

    }
    render() {
        console.log(this.props.children);
        return <div className="home">
                    <HomeHeader/>
                    <div className="home-body">
                    <HomeNav nav={this.props.homeNav1}/>
                    <NavRouter/>
                    </div>
                </div>


    }
}
export default connect(state=>({...state.home}),actions)(Home)