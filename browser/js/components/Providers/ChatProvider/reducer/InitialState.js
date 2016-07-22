'use strict';

import React from 'react';
import {GoogleMap} from '../chatModules/Travel/Components/GoogleMap';
import {GeniusBotImages} from '../chatModules/Bot/GeniusBot/avatars';

let messageId = {id: 0};

export const messageId_iterate = () => messageId.id++;

const chat_initialState = {
  users: new Map()
    .set('1', {id: 1, username: "John", avatar: "https://randomuser.me/api/portraits/lego/0.jpg"})
    .set('2', {id: 2, username: "GeniusBot", avatar: GeniusBotImages['happy']}),
  currentMessage: null,
  messages: [],
  selfId: 1
}

export default chat_initialState;
