'use strict';

// TEMPLATE CODE FROM CHATPROVIDER

// import breakpoints from './breakpoints';
// import {CHANGE_CHATBOX_WIDTH} from './actionCreators';
//
// export const width500Check = window.matchMedia("(min-width:500px)")
//
// function updateChatWidth(dispatch, mediaQueryListOrEvent){
//   console.log('chatwidth handler triggered')
//   let chatWidth = mediaQueryListOrEvent.matches ? '500px' : '100vw';
//   console.log('chatwidth', chatWidth);
//   dispatch(CHANGE_CHATBOX_WIDTH(chatWidth))
// }
//
// export function width500Setup (dispatch){
//   width500Check.addListener(width500Dispatcher.bind(null, dispatch));
//   updateChatWidth(dispatch, width500Check)
//   return
// }
//
// export function width500Dispatcher(dispatch, mediaQueryListEvent) {
//   console.log('width500dispatcher triggered', arguments);
//     console.log('chatwidth handler triggered')
//     let chatWidth = mediaQueryListEvent.matches ? '500px' : '100vw';
//     console.log('chatwidth', chatWidth);
//     dispatch(CHANGE_CHATBOX_WIDTH(chatWidth))
//
//   width500Check.removeListener(width500Dispatcher);
// }
