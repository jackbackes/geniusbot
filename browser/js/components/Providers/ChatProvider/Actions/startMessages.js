'use strict';

import React from 'react';
import {GoogleMap} from '../chatModules/Travel';
import {GeniusBotImages} from '../../ChatProvider/chatModules/Bot/GeniusBot/avatars';
import messageId_iterate from './messageId_iterate';


const startMessages = [
  {
    id: messageId_iterate(),
    message: "Hi, I'm GeniusBot! Type 'travel' or 'images'.",
    userId: 2,
    attachments: null,
    isFailed: false,
    isFetching: false,
    error: null
  }
]

export default startMessages;
