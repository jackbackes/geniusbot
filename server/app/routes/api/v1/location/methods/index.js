'use strict';
import React from 'react';
import * as axios from 'axios';
const haversine = require('./haversine');
const Promise = require('bluebird');
const {GOOGLE_MAP_KEY} = require(global._envPath);

const createSearch = (query, type='airport', key=GOOGLE_MAP_KEY) => {
  return {
    url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
    method: 'get',
    params: {
      query,
      key,
      type
    }
  }
}

export const fetchLocation = (query, type) =>
  axios.request(createSearch(query, type) )
  .then( response => {
    console.log(response);
    return response.data.results[0]
  } )


export const calculateDistance = (coord1, coord2) => haversine(coord1, coord2);
