'use strict';

const axios = require('axios');
const Promise = require('bluebird');
import * as endpoints from './clarifaiEndpoints';

const getClarifaiAuth = () => require(global._envPath).CLARIFAI;
export const getCurrentAccessToken = () => require(global._envPath).CLARIFAI.accessToken;

const updateAccessToken = (newAccessToken) => {
  getClarifaiAuth().accessToken = newAccessToken;
  return newAccessToken;
}


export const getNewAccessToken = () =>
  // check to see if we should get a new access token
  shouldGetNewAccessToken() ? (
  // get a new access token from the clarifai api
  Promise.resolve(
    axios.post(
      `${endpoints.TOKEN}/?grant_type=client_credentials&client_id=${getClarifaiAuth().clientId}&client_secret=${getClarifaiAuth().clientSecret}`
    ))
    .then( response => {
      if(!response.data) throw 'no response from clarifai token request';
      else {
      return response.data } })
    .tap( (newAccessToken) => updateAccessToken(newAccessToken) )
    // .return( accessToken )
    .catch(console.log) ):
  // otherwise return the current access token;
  getCurrentAccessToken()


export const shouldGetNewAccessToken = () =>
  Promise.resolve( getCurrentAccessToken() )
    .then( currentAccessToken =>
      !currentAccessToken || currentAccessToken.expires_in < 30000 ? true : false
    )
    .catch( ()=> new Error('not sure whether we should get a new access token or not'))
