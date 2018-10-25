import React from "react";
import ReactDOM from "react-dom"
import App from "./container/App"
import Home from "./container/Home/index"
import Vip from  "./container/Vip/index"
import Find from "./container/Find/index"
import Carts from "./container/Carts/index"
import Mine from "./container/Mine/index"


import {HashRouter as Router,Route,Redirect,Link,Switch} from 'react-router-dom'

ReactDOM.render(
    <Router>

            <App>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/vip"  component={Vip}/>
                    <Route path="/find"  component={Find}/>
                    <Route path="/carts"  component={Carts}/>
                    <Route path="/mine"  component={Mine}/>
            </App>

    </Router>,
    window.root);


 