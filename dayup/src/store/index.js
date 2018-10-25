


import React from 'react';

import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers/index';

let store =createStore(reducer );


export default store;
