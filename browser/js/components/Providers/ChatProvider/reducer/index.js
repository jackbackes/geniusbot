'use strict';

import chat_initialState, {messageId_iterate} from './InitialState';
const _ = require('lodash');

export function chatReducer(state = chat_initialState, action){
  let nextState = Object.assign({}, state);
  let messageToUpdateIndex, isFetching, error, failed, tagId, commentId, payload;
  let {messages} = nextState;
  if(nextState.currentMessage && action.payload && action.payload.id) {
    messageToUpdateIndex = messages.findIndex(
      message => message.id === action.payload.id
    )
  }
  switch(action.type){
    case 'SEND_MESSAGE_REQUEST':
      nextState.currentMessage = action.payload;
      nextState.currentMessage.id = messageId_iterate();
      nextState.messages.push(action.payload);
      break;
    case 'SEND_MESSAGE_SUCCESS':
      nextState.messages[messageToUpdateIndex] = action.payload;
      nextState.currentMessage = null;
      break;
    case 'SEND_MESSAGE_FAILURE':
      nextState.messages[messageToUpdateIndex] = action.payload;
      nextState.currentMessage = null;
      break;
  }
  return nextState;
}
