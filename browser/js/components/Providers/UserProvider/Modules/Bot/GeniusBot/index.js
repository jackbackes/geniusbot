// 'use strict';
//
// import React from 'react';
// import {CommandMap as commandMap, CommandHandler} from './chatModules';
// const Promise = require('bluebird');
//
// // botId is hard coded and should be removed.
// let botId = 2;
//
// export const GeniusBotHandler = ({state, dispatch}, CommandMap = commandMap, currentConversation = null, commandHandler = CommandHandler) => {
//   // console.log('geniusbotHandler', state.newestMessage);
//   if(state.newestMessage && state.newestMessage.message && state.newestMessage.userId !== botId){
//     let {message} = state.newestMessage;
//     return Promise.try(()=>commandHandler(message, dispatch));
//   } else {
//     return
//   }
// }
//
// export const GeniusBotSelector = (state) => {
//   const {messages} = state.chat;
//   return {
//     newestMessage: messages[messages.length-1]
//   }
// }
//
// export const GeniusBotObserver = (store, select, onChange = GeniusBotHandler) => {
//   let currentState;
//   function handleChange() {
//     let nextState = select(store.getState());
//     if (nextState !== currentState) {
//       currentState = nextState;
//       onChange({state: currentState, dispatch: store.dispatch});
//     }
//   }
//
//   let unsubscribe = store.subscribe(handleChange);
//   handleChange();
//   return unsubscribe;
// }
