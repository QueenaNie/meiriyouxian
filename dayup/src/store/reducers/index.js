import React, {Component} from "react"
import {combineReducers} from 'redux';
import * as Types from "../action-types"

let initState = {
    homeNav1: [],
    homeSlider1: [],
    homeCategory1: [],
    currentTypes: "all",
    homeProduce1: {
        list: [],//存储当前的课程数据
        offset: 0,//代表当前页面已经加载多少条
        limit: 4,
        hasMore: true
    },
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

let reducer = combineReducers({
    home
});
export default reducer;

