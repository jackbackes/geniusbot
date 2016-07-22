'use strict';
import React from 'react';
import * as axios from 'axios';
import GoogleMap from '../Components/GoogleMap';
import haversine from './haversine';
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
  dispatch({type: 'FETCH_ORIGIN_REQUEST'})
  return axios.request(createSearch(query))
  .then( response => response.data )
  .then( locationData => dispatch(fetchOriginSuccess(locationData)))
  .catch( error => dispatch(fetchOriginFailure(error)))
}

const fetchOriginSuccess = (payload) => dispatch => {
  dispatch({type: 'FETCH_ORIGIN_SUCCESS', payload})
}

const fetchOriginFailure = (error) => dispatch => {
  dispatch({type: 'FETCH_ORIGIN_FAILURE', error})
}

export const fetchDestination = (query) => dispatch => {
  dispatch({type: 'FETCH_DESTINATION_REQUEST'})
  return axios.request(createSearch(query))
  .then( response => response.data )
  .then( locationData => dispatch(fetchDestinationSuccess(locationData)))
  .catch( error => dispatch(fetchDestinationFailure(error)));
}
const fetchDestinationSuccess = (payload) => dispatch =>
  dispatch({type: 'FETCH_DESTINATION_SUCCESS', payload})

const fetchDestinationFailure = (error) => dispatch =>
  dispatch({type: 'FETCH_DESTINATION_FAILURE', error})


const calculateDistance = (coord1, coord2) => dispatch => {
  dispatch({type: 'CALCULATE_DISTANCE_REQUEST'})
  return axios.post('api/v1/location/distance', {coord1, coord2})
  .then( response => response.data )
  .then( distance => dispatch(calculateDistanceSuccess({distance, coord1, coord2})))
  .catch( error => dispatch(calculateDistanceFailure(error)));
}
const calculateDistanceSuccess = (payload) => dispatch =>
  dispatch({type: 'CALCULATE_DISTANCE_SUCCESS', payload})

const calculateDistanceFailure = (error) => dispatch =>
  dispatch({type: 'CALCULATE_DISTANCE_FAILURE', error})
