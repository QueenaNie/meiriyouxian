import React from 'react';
// applyMiddleware : 中间键 这个方法存在于redux 中，方法放着对应的中间键
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers/index';
import reduxLogger from 'redux-logger' //打印状态
import reduxThunk from 'redux-thunk' //处理异步
import reduxPromise from 'redux-promise' // 返回 promise 对象
let store =createStore(reducer,applyMiddleware(reduxLogger,reduxThunk,reduxPromise));
window._store=store;//为了方便调试 使用；

export default store;
