'use strict';
// var co = require('co');
import React from 'react';
import {requestSendMessage} from '../../Actions/index.js';

const Promise = require('bluebird');
import AirportMap from './Components/GoogleMap/AirportMap';
const _ = require('lodash');
import {fetchOrigin, fetchDestination, calculateDistance} from './methods';
export {travelReducer} from './reducer';
import RaisedButton from 'material-ui/RaisedButton';


function* travelGenerator (){
    let message, dispatch, chatModules, input, select, getState;

    input = yield 'initializer';
      ({message, chatModules, dispatch, select, getState} = input);
      let selectObj = {select, getState};

      dispatch(requestSendMessage("I can really help with that!", 2));
      dispatch(requestSendMessage("Where are you starting from?", 2));

    input = yield 'starting airport';
      ({message, chatModules} = input); console.log('starting airport', message)

      dispatch(requestSendMessage("Please wait...", 2));
      Promise.try(()=> dispatch(fetchOrigin(message)))
        .then( ()=> (
          {message, chatModules} = select(getState())
        ) )
        .then( ()=>
          dispatch(requestSendMessage(`I understand you are starting from ${chatModules.travel.origin.name}. Does this look correct?`, 2 , [ React.createElement(AirportMap({origin: getOrigin(selectObj)}), {key: 0} ) ]  ))
      )

    input = yield 'starting airport confirmation';
      ({message, chatModules} = input);

      dispatch(requestSendMessage("Great!", 2));
      dispatch(requestSendMessage("What is your final destination?", 2));

    input = yield 'destination airport';
      ({message, chatModules} = input);
      dispatch(requestSendMessage("Please wait...", 2));
      Promise.try(()=> dispatch(fetchDestination(message)))
        .then( ()=> (
          {message, chatModules} = select(getState())
        ) )
        .then( ()=>
          dispatch(requestSendMessage(`I understand that your final destination is ${chatModules.travel.destination.name}. Does this look correct?`, 2, [ React.createElement(AirportMap({destination: getDestination(selectObj)}), {key: 0} ) ])) )

    input = yield 'destination airport confirmation';
    ({message, chatModules} = input);
    const {originCoords, destinationCoords} = chatModules.travel;
      dispatch(requestSendMessage("Great!", 2));
      return Promise.try(()=> dispatch(calculateDistance(originCoords, destinationCoords)) )
        .then( ()=> (
          {message, chatModules} = select(getState())
        ) )
        .then(()=> dispatch(requestSendMessage(`You are travelling from ${getOrigin(selectObj).name} to ${getDestination(selectObj).name}. The distance is ${getDistance(selectObj, 'km')}.`, 2, [ React.createElement(AirportMap({destination: getDestination(selectObj), origin: getOrigin(selectObj)}), {key: 0} ) ] )) )
        .then( ()=> input.currentCommand = null )
        .then( ()=> dispatch(requestSendMessage("Thanks for using my travel service!", 2, [<RaisedButton href="https://drive.google.com/open?id=0B78g7xzuPItKU3d3MFdZUEtRTkU" label="Get John's resume!" />]) ) )

}

function getOrigin({select, getState}){
  return select(getState()).chatModules.travel.origin
}

function getDestination({select, getState}){
  return select(getState()).chatModules.travel.destination
}

function getDistance({select, getState}, unit){
  let distanceValue = select(getState()).chatModules.travel.distance.value;
  switch(unit){
    case 'km':
    case 'kilometer':
    case 'kilometers':
      return `${Math.floor(distanceValue/1000)} ${unit}`;
      break;
    default:
      return distanceValue;
    }
  }


let travelBot = travelGenerator();

export const travel = (input) => {
  travelBot.next(input);
}
