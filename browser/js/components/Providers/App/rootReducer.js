'use strict'

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {
  chatReducer as chat,
  travelReducer as travel,
  imageTagsReducer as imageTags } from '../ChatProvider/exportReducers';
import { uxReducer as ux } from './Reducers/ux';


const rootReducer = combineReducers({
  chat,
  chatModules: combineReducers({
    travel,
    imageTags
  }),
  routing,
  ux
})

export default rootReducer;
