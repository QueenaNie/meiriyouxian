import React, {Component} from "react"
import {HashRouter as Router,Route,Redirect,Link,Switch} from 'react-router-dom'
import Hotsale from "../../component/homeSlider/Hotsale"
import Vipsale from "../../component/homeSlider/Vipsale"
import Farm from "../../component/homeSlider/Farm"
import Fruit from "../../component/homeSlider/Fruit"
import Veg from "../../component/homeSlider/Veg"
import Meat from "../../component/homeSlider/Meat"
import Fish from "../../component/homeSlider/Fish"
import Milk from "../../component/homeSlider/Milk"
import Sock from "../../component/homeSlider/Sock"
import Wine from "../../component/homeSlider/Wine"
import Rawfood from "../../component/homeSlider/Rawfood"
import Lightfood from "../../component/homeSlider/Lightfood"
import Nomeat from "../../component/homeSlider/Nomeat"
import Oil from "../../component/homeSlider/Oil"
import Tools from "../../component/homeSlider/Tools"
import Hotpot from "../../component/homeSlider/Hotpot"
 export default class NavRouter extends Component{
    render(){
        return (
            <Router>
                <div>
                <Route path="/home/hotsale" component={Hotsale}/>
                <Route path="/home/vipsale" component={Vipsale}/>
                <Route path="/home/farm" component={Farm}/>
                <Route path="/home/fruit" component={Fruit}/>
                <Route path="/home/veg" component={Veg}/>
                <Route path="/home/meat" component={Meat}/>
                <Route path="/home/fish" component={Fish}/>
                <Route path="/home/milk" component={Milk}/>
                <Route path="/home/sock" component={Sock}/>
                <Route path="/home/wine" component={Wine}/>
                <Route path="/home/rawfood" component={Rawfood}/>
                <Route path="/home/lightfood" component={Lightfood}/>
                <Route path="/home/nomeat" component={Nomeat}/>
                <Route path="/home/oil" component={Oil}/>
                <Route path="/home/tools" component={Tools}/>
                <Route path="/home/hotpot" component={Hotpot}/>
            </div>

            </Router>
        )
    }
 }



 