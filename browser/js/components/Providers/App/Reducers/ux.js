'use strict';

import { combineReducers } from 'redux';
import { uxChatReducer as chat } from '../../ChatProvider/exportReducers';

export const uxReducer = combineReducers({
  chat
})
