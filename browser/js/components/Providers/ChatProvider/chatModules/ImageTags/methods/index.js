'use strict';

// dependencies
import React from 'react';
const Promise = require('bluebird');

// imports
import * as axios from 'axios';
import * as actions from '../Actions';

// declarations
const {FETCH_TAGS, SET_IMAGE} = actions;
const fetchTagsRoute = `/api/v1/image/tag`

// methods
export const fetchTags = messageWithImage => dispatch =>
  Promise.resolve(messageWithImage)
    .tap( message => console.log('fetching tags', message))
    // .get("message")
    .then( message => axios.post(fetchTagsRoute, {
      imgUrl: message
    }))
    .get("data")
    .tap(tagArray => dispatch(FETCH_TAGS( tagArray )) )
    .then(tagArray => tagArray)
    .catch(err => console.error('there was an error', err))

export const setImage = imageUrl => dispatch =>
  dispatch(SET_IMAGE, imageUrl)
