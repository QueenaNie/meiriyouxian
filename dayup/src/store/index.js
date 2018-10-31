


import React from 'react';
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers/index';
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
let store =createStore(reducer,applyMiddleware(reduxLogger,reduxThunk,reduxPromise) );
window._store=store;//主要为了调试使用
export default store;
