import React, {Component} from "react"
import {combineReducers} from 'redux';

import * as Types from "../action-types"

let initState = {
    homeNav1: [],
    homeSlider1: [],
    homeCategory1: [],
    currentTypes: "all",
    carts:[],//存放购物车头部的数据,
    detSliders:[],//存放轮播图的数据
    homeProduce1: {
        list: [],//存储当前的课程数据
        offset: 0,//代表当前页面已经加载多少条
        limit: 4,
        hasMore: true
    },
    sliders:[],// 用于接收轮播图响应回来的数据
    lessons:{
        list:[],// 存储当前的课程数据
        offset:0,// 代表当前页面已经加载多少条；
        limit:10,
        hasMore:true
    }
};

function home(state = initState, action) {
    switch (action.type) {
        case Types.HOME_NAV:
            return {...state, homeNav1: action.payload};
        case Types.HOME_SLIDER:
            return {...state, homeSlider1: action.payload};
        case Types.HOME_CATEGORY:
            return {...state, homeCategory1: action.payload};
        case Types.HOME_PRODUCE:
            return {
                ...state, homeProduce1: {
                    list: [...state.homeProduce1.list, ...action.payload.list],
                    offset: state.homeProduce1.offset + state.homeProduce1.list.length,
                    limit: 4,
                    hasMore: action.payload.hasMore
                }
            };


    }
    return state;
}
function find(state=initState,action) {

    switch(action.type){
        case Types.CHANGE_TYPES:
            return {...state,currentTypes:action.val};
        case Types.SET_SLIDERS:
            return {...state,sliders:action.payload};
        case Types.SET_LESSONS:
            return {
                ...state,lessons:{
                    list:[...state.lessons.list,...action.payload.list],
                    offset:state.lessons.offset+state.lessons.list.length,
                    limit:10,
                    hasMore:action.payload.hasMore
                }
            }
    }
    return state;
}
function cart(state=initState,action) {
    switch (action.type){
        case Types.JUMP_CART:
            return {...state,carts:action.payload}
    }
    return state;
}
function detailSlider(state=initState,action) {
    switch (action.type){
        case Types.DETAIL_SLIDER:
            return {...state,detSliders:action.payload}
    }
    return state;
}

let reducer = combineReducers({
    home,
    find,detailSlider,cart

});
export default reducer;





 

