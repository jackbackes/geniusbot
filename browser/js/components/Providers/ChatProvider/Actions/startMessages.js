'use strict';

import React from 'react';
// import {GoogleMap, GeniusBotImages} from './imports';
import {GoogleMap} from '../chatModules/Travel';
// import {GeniusBotImages} from '../../UserProvider/Modules/Bot/GeniusBot/avatars';
import {GeniusBotImages} from '../../ChatProvider/chatModules/Bot/GeniusBot/avatars';
import messageId_iterate from './messageId_iterate';


const startMessages = [
  {
    id: messageId_iterate(),
    message: "Hi, I'm GeniusBot! Type 'travel' for travel directions.",
    userId: 2,
    attachments: null,
    isFailed: false,
    isFetching: false,
    error: null
  }
]

export default startMessages;
