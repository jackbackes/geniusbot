'use strict';

const ux_initialState = {
  chat: {
    chatField: {
      value: ''
    }
  }
}

export const uxReducer = (state = ux_initialState, action) => {
  let nextState = Object.assign({}, state);
  switch(action.type){
    case 'UPDATE_CHAT_FIELD':
      nextState.chat.chatField.value = action.payload;
      break;
  }
  return nextState;
}
