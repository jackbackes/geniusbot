'use strict'

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { chatReducer, travelReducer } from '../ChatProvider/exportReducers';
import { uxReducer } from './Reducers/ux';


const rootReducer = combineReducers({
  chat: chatReducer,
  chatModules: combineReducers({
    travel: travelReducer
  }),
  routing: routerReducer,
  ux: uxReducer
})

console.log('root reducer', rootReducer);

export default rootReducer;
