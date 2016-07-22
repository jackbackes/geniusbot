'use strict';
import axios from 'axios';
var Promise = require('bluebird');
export {start, sendStartMessage} from './startActions';
import messageId_iterate from './messageId_iterate';
import { createAction, handleAction, handleActions } from 'redux-actions';

export const SEND_MESSAGE_REQUEST = createAction('SEND_MESSAGE_REQUEST')


export const updateChatField =
  (event) =>
    dispatch =>
      dispatch({
        type: 'UPDATE_CHAT_FIELD',
        payload: event.target.value
      })

export const clearChatField =
  () =>
    dispatch =>
      dispatch({
        type: 'UPDATE_CHAT_FIELD',
        payload: ""
      })

export const requestSendMessage =
  (message, userId, attachments) =>
    dispatch => {
      console.log(attachments);
      let payload = {
        id: messageId_iterate(),
        message,
        userId,
        isFetching: true,
        failed: false,
        error: null,
        attachments: attachments || null
      }
      dispatch(SEND_MESSAGE_REQUEST(payload))
      // axios.post('/api/v1/message', messageObject)
      // .then( response => response.data )
      // .then( data => dispatch(sendMessageSuccess(data)) )
      // .catch( error => dispatch(sendMessageFailure(error)) )
      return Promise.delay(300)
        .then( ()=> dispatch(sendMessageSuccess(payload)))
        .catch( ()=> sendMessageFailure('could not send message'))
    }


export const sendMessageSuccess =
  payload =>
    dispatch => {
      _.merge(payload, {
        isFetching: false,
        isFailed: false,
        error: null,
      })
      dispatch(clearChatField());
      return dispatch({
        type: 'SEND_MESSAGE_SUCCESS',
        payload
      })
    }

export const sendMessageFailure =
  error =>
    dispatch => {
        let payload = {
          message: null,
          isFetching: false,
          failed: true,
          error
        }
        return dispatch({
          type: 'SEND_MESSAGE_FAILURE',
          payload
        })
    }
