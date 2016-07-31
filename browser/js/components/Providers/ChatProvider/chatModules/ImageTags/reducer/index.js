'use strict';

// dependencies
const _ = require('lodash');
import {combineReducers} from 'redux';
import { handleActions } from 'redux-actions';

// imports
import initialState from './InitialState';
import * as actions from '../Actions';

// reducer
export const reducer = handleActions({
  [actions.FETCH_IMAGE]: (state, action) => ({
    ...state,
    image: action.payload
  }),
  [actions.FETCH_TAGS]: (state, action) => ({
    ...state,
    imageTags: action.payload
  }),
  [actions.SET_IMAGE]: (state, action) => ({
    ...state,
    image: action.payload
  })
}, initialState)
