
'use strict';
import { handleActions } from 'redux-actions';
import {initialStyles, initialUX} from '../styles/initialState';
import breakpoints from './breakpoints';
import * as actions from './actionCreators';


// TEMPLATE CODE FROM CHATPROVIDER
//
// const {
//   CHANGE_CHATBOX_WIDTH,
//   UPDATE_CHAT_FIELD
// } = actions;
//
// export const chatField = handleActions({
//   [UPDATE_CHAT_FIELD]: (state, action) => ({
//     ...state,
//       // chatField: {
//       //   ...state.chatField,
//         value: action.payload
//       // }
//   })
// }, initialUX.chatField);
//
// export const avatar = handleActions({}, initialUX.avatar);
//
// export const styles = handleActions({
//   [CHANGE_CHATBOX_WIDTH]: (state, action) => ({
//     ...state,
//       chat: {
//         ...state.chat,
//         width: action.payload
//       },
//       chatInput: {
//         ...state.chatInput,
//         width: action.payload
//       },
//       chatInputContainer: {
//         ...state.chatInputContainer,
//         width: action.payload
//       }
//   })
// }, initialStyles)
