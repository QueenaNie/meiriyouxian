import React, {Component} from "react"
import './carts.less'
import CartsHeader from './CartsHeader'
import CartsContent from './CartsContent'
import {connect} from 'react-redux'
import actions from '../../store/actions/carts'
class Carts extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.getCart();//为获取购物车的数据，发送请求
    }
    render() {
        return <div className='cart' >

                <CartsHeader carts={this.props.carts}/>
            <CartsContent carts={this.props.carts}/>
        </div>
    }
}
export  default connect(state=>({...state.cart}),actions)(Carts)