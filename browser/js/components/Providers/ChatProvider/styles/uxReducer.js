'use strict';

import {combineReducers} from 'redux';
import * as handlers from './handlers';

export const uxChatReducer = combineReducers({
  ...handlers
})
