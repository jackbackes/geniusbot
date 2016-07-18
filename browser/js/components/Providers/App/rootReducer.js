'use strict'

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {ux, currentData, staticData} from './Reducers';

const rootReducer = combineReducers({
  ux,
  currentData,
  staticData,
  routing: routerReducer
})

export default rootReducer
