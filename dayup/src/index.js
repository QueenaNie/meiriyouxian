import React from "react";
import ReactDOM from "react-dom"
import App from "./container/App"
import Home from "./container/Home/index"
import Vip from  "./container/Vip/index"
import Find from "./container/Find/index"
import Carts from "./container/Carts/index"
import Mine from "./container/Mine/index"
import {Provider} from 'react-redux'
import store from './store/index'
import {HashRouter as Router,Route,Redirect,Link,Switch} from 'react-router-dom'
import Detail from "./component/CartDetail/details";
ReactDOM.render(
    <Router>
<Provider store={store}>
    <App>
        <Route path="/home" component={Home}/>
        <Route path="/vip"  component={Vip}/>
        <Route path="/find"  component={Find}/>
        <Route path="/carts"  component={Carts}/>
        <Route path="/mine"  component={Mine}/>
        <Route path="/detail"  component={Detail}/>
    </App>
</Provider>
    </Router>,
    window.root);


 