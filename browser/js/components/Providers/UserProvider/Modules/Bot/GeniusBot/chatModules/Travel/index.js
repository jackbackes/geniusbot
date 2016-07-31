// 'use strict';
// // var co = require('co');
// import React from 'react';
// import {chatActionCreators} from '../../../../../imports';
// const {requestSendMessage} = chatActionCreators;
// const Promise = require('bluebird');
// import {GoogleMap} from './Components/GoogleMap';
// const _ = require('lodash');
// import {fetchOrigin, fetchDestination} from './methods';
// export {travelReducer} from './reducer';
//
// function* travelGenerator (){
//     let message, dispatch;
//     let input;
//
//     input = yield 'initializer';
//     ({message, dispatch} = input);
//       dispatch(requestSendMessage("I can really help with that!", 2));
//       dispatch(requestSendMessage("Where are you starting from?", 2));
//
//     input = yield 'starting airport';
//     ({message, dispatch} = input);
//       dispatch(requestSendMessage("Please wait...", 2));
//       Promise.try(()=> dispatch(fetchOrigin(message)))
//       dispatch(requestSendMessage("I understand you are starting from DFW Airport. Does this look correct?", 2 /*, [<GoogleMap key={0} />]  */));
//
//     input = yield 'starting airport confirmation';
//     ({message, dispatch} = input);
//       dispatch(requestSendMessage("Great!", 2));
//       dispatch(requestSendMessage("What is your final destination?", 2));
//
//     input = yield 'destination airport';
//     ({message, dispatch} = input);
//       dispatch(requestSendMessage("Please wait...", 2));
//       Promise.try(()=> dispatch(fetchDestination(message)))
//       dispatch(requestSendMessage("I understand that your final destination is Los Angeles International Airport. Does this look correct?", 2/*, [(<GoogleMap key={0} />)] */));
//
//     input = yield 'destination airport confirmation';
//     ({message, dispatch} = input);
//       dispatch(requestSendMessage("Great!", 2));
//       dispatch(requestSendMessage("You are travelling from DFW International Airport to Los Angeles International Airport. The distance is 2,343 miles.", 2/*, [(<GoogleMap key={0} />)] */ ))
//       dispatch(requestSendMessage("Is there anything else I can help you with?", 2));
//       input.currentCommand = null;
//     return
// }
//
// let travelBot = travelGenerator();
//
// export const travel = (message, dispatch) => {
//   travelBot.next({message, dispatch});
// }
