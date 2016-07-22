'use strict';
import React from 'react';
import * as axios from 'axios';
import GoogleMap from '../Components/GoogleMap';
import haversine from './haversine';
import * as travelActions from '../Actions';
const {FETCH_ORIGIN, FETCH_DESTINATION, CALCULATE_DISTANCE} = travelActions;
var Promise = require('bluebird');

const Travel = ()=>{}
const TravelSuccess = ()=>{}
const TravelFailure = ()=>{}

const createSearch = (query, type='airport') => {
  return {
    url: '/api/v1/location/airport',
    method: 'get',
    responseType: 'json',
    params: {
      query,
      type
    }
  }
}

export const fetchOrigin = (query) => dispatch => {
  dispatch(FETCH_ORIGIN({query}))
  return axios.request(createSearch(query))
  .then( response => response.data )
  .then( locationData => dispatch(FETCH_ORIGIN(locationData)))
  .catch( error => dispatch(FETCH_ORIGIN(new Error(error))))
}

export const fetchDestination = (query) => dispatch => {
  dispatch(FETCH_DESTINATION({query}))
  return axios.request(createSearch(query))
  .then( response => response.data )
  .then( locationData => dispatch(FETCH_DESTINATION(locationData)) )
  .catch( error => dispatch(FETCH_DESTINATION(new Error(error) )))
}



export const calculateDistance = (coord1, coord2) => dispatch => {
  dispatch(CALCULATE_DISTANCE({coord1, coord2}))
  return axios.post('api/v1/location/distance', {coord1, coord2})
  .then( response => response.data.distance )
  .then( distance => dispatch(CALCULATE_DISTANCE({coord1, coord2, distance})))
  .catch( error => dispatch(CALCULATE_DISTANCE(new Error(error) )));
}
