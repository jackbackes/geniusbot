'use strict';

import React from 'react';
import {CommandMap as commandMap, CommandHandler} from '../../';

const Promise = require('bluebird');

// botId is hard coded and should be removed.
let botId = 2;

export const GeniusBotHandler = ({state, dispatch, getState, select}, CommandMap = commandMap, currentConversation = null, commandHandler = CommandHandler) => {
  if(state.message && state.messageObj.userId !== botId){
    return Promise.try(()=>commandHandler(state, dispatch, getState, select));
  } else {
    return
  }
}

export const GeniusBotSelector = (state) => {
  const {messages} = state.chat;
  const {chatModules} = state;
  return {
    message: messages.length ? messages[messages.length-1].message : null,
    messageObj: messages.length ? messages[messages.length-1] : null,
    chatModules
  }
}

export const GeniusBotObserver = ({getState, dispatch}, select = GeniusBotSelector, onChange = GeniusBotHandler) => (next) => (action) => {
    let currentState;
    function handleChange() {
      let nextState = select(getState());
      if (nextState !== currentState) {
        onChange({state: nextState, dispatch, getState, select});
      }
    }

    handleChange();
    return next(action);
  }
