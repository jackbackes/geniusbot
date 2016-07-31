'use strict';

// import breakpoints from './breakpoints';
import {CHANGE_CHATBOX_WIDTH} from './actionCreators';

export const width500Check = window.matchMedia("(min-width:500px)")

function updateChatWidth(dispatch, mediaQueryListOrEvent){
  console.log('chatwidth handler triggered')
  let chatWidth = mediaQueryListOrEvent.matches ? '500px' : '100vw';
  console.log('chatwidth', chatWidth);
  dispatch(CHANGE_CHATBOX_WIDTH(chatWidth))
}

export function width500Setup (dispatch){
  width500Check.addListener(width500Dispatcher.bind(null, dispatch));
  updateChatWidth(dispatch, width500Check)
  return
}

export function width500Dispatcher(dispatch, mediaQueryListEvent) {
  console.log('width500dispatcher triggered', arguments);
  // function chatWidthHandler(mediaQueryList){
    console.log('chatwidth handler triggered')
    let chatWidth = mediaQueryListEvent.matches ? '500px' : '100vw';
    console.log('chatwidth', chatWidth);
    dispatch(CHANGE_CHATBOX_WIDTH(chatWidth))
  // }

  width500Check.removeListener(width500Dispatcher);
}



// creating a general breakpoint handler

// class Breakpoint {
//   constructor(){
//     this.mediaMatches = {}
//   }
//   addCondition({matchMedia, ifMatch, ifNotMatch, action}){
//     Object.defineProperty(this.mediaMatches, matchMedia, {
//       enumerable: true,
//       configurable: true,
//       value: Object.assign(
//         {},
//         {
//           matchMedia: window.matchMedia(matchMedia),
//           toString: matchMedia,
//           ifMatch,
//           ifNotMatch,
//           action
//         })
//     });
//     return this;
//     this.mediaMatches[matchMedia] =
//   removeCondition({matchMedia}){
//     delete this.mediaMatch[matchMedia]
//     return this;
//   }
//   setup(dispatch){
//     this.forEach( match => {
//       match.matchMedia.addListener(Breakpoint.listener.bind(null, dispatch))
//     } )
//     return this;
//   }
//   static listener(dispatch, mediaQueryListEvent){}
// }
