'use strict';

import {initialOrigin, initialDestination, initialDistance, queryId_iterate} from './InitialState';
const _ = require('lodash');
import {FETCH_ORIGIN, FETCH_DESTINATION, CALCULATE_DISTANCE} from '../Actions';
import {combineReducers} from 'redux';

import { createAction, handleAction, handleActions } from 'redux-actions';

let origin = handleAction(FETCH_ORIGIN, {
  next(state, action){
    return _.merge({}, ...state, action.payload)
  },
  throw(state, action){}
}, initialOrigin);

let originCoords = handleAction(FETCH_ORIGIN, {
  next(state, action){
    let coords = action.payload.geometry ? action.payload.geometry.location : null;
    return coords ? [coords.lat, coords.lng] : state
  },
  throw(state, action){}
}, []);

let destination = handleAction(FETCH_DESTINATION, {
  next(state, action){
    return _.merge({}, ...state, action.payload)
  },
  throw(state, action){}
}, initialDestination);

let destinationCoords = handleAction(FETCH_DESTINATION, {
  next(state, action){
    let coords = action.payload.geometry ? action.payload.geometry.location : null
    return coords ? [coords.lat, coords.lng] : state
  },
  throw(state, action){}
}, []);

let distance = handleAction(CALCULATE_DISTANCE, {
  next(state, action){
    return _.merge({}, ...state, {value: action.payload.distance} )
  },
  throw(state, action){
    return action.payload
  }
}, initialDistance);;

export const travelReducer = combineReducers({
  origin,
  originCoords,
  destination,
  destinationCoords,
  distance
});
