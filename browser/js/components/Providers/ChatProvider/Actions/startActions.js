'use strict';
const Promise = require('bluebird');
import startMessages, {messageId_iterate} from './startMessages';
import {sendMessageSuccess, sendMessageFailure, SEND_MESSAGE_REQUEST} from './'
import { createAction, handleAction, handleActions } from 'redux-actions';


export const start =
  () =>
    dispatch =>
      Promise.each(startMessages, message =>
        Promise.resolve(dispatch(sendStartMessage(message, message.userId))).delay(300)
      );

export const sendStartMessage =
  (payload, userId) =>
    dispatch =>{
      _.merge(payload, {
        isFetching: true
      })
      dispatch(SEND_MESSAGE_REQUEST(payload))
      return Promise.delay(300)
        .then( ()=> dispatch(sendMessageSuccess(payload)))
        .catch( ()=> sendMessageFailure('could not send message'))
    }
