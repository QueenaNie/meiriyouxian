import React from "react";
import ReactDOM from "react-dom"
import App from "./container/App"
import Home from "./container/Home/index"
import Vip from  "./container/Vip/index"
import Find from "./container/Find/index"
import Carts from "./container/Carts/index"
import Mine from "./container/Mine/index"
<<<<<<< HEAD
import store from "./store/index";
import {Provider} from "react-redux"

=======
import store from "./store/index"
import {Provider} from "react-redux"
>>>>>>> f11209e85d60b3ffb1f806e2ab55a8ee2f204dcf
import {HashRouter as Router,Route,Redirect,Link,Switch} from 'react-router-dom'

ReactDOM.render(
    <Router>
<<<<<<< HEAD
        <Provider store={store}>
            <App>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/vip"  component={Vip}/>
                    <Route path="/find"  component={Find}/>
                    <Route path="/carts"  component={Carts}/>
                    <Route path="/mine"  component={Mine}/>
            </App>
        </Provider>
=======
             <Provider store={store}>
                 <App>
                     {/*<Route path="/" exact={true} component={Home}/>*/}
                     <Route path="/home"    component={Home}/>
                     <Route path="/vip"  component={Vip}/>
                     <Route path="/find"  component={Find}/>
                     <Route path="/carts"  component={Carts}/>
                     <Route path="/mine"  component={Mine}/>
                     <Redirect  to="/home/hotsale"/>
                 </App>
             </Provider>
>>>>>>> f11209e85d60b3ffb1f806e2ab55a8ee2f204dcf
    </Router>,
    window.root);


 