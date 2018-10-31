import React, {Component} from "react"
import {combineReducers} from 'redux';
import * as Types from "../action-types";
let initState1={
    carts:[],//存放购物车头部的数据,
    detSliders:[]//存放轮播图的数据

};
function home(state={},action) {
    return state;
}
function cart(state=initState1,action) {
    switch (action.type){
        case Types.JUMP_CART:
            return {...state,carts:action.payload}
    }
    return state;
}
function detailSlider(state=initState1,action) {
    switch (action.type){
        case Types.DETAIL_SLIDER:
            return {...state,detSliders:action.payload}
    }
    return state;
}
let reducer=combineReducers({
    home,cart,detailSlider
});
export default reducer;

 
