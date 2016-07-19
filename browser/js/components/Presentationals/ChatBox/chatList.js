'use strict';

import React from 'react';
// import {GoogleMap, GeniusBotImages} from './imports';
import {GoogleMap} from '../../Providers/ChatProvider/chatModules/Travel/Components/GoogleMap';
import {GeniusBotImages} from '../index.js';

const chatList = [
  {
    message: "Hi there!",
    user: {
      id: 1,
      username: "John",
      avatar: "https://randomuser.me/api/portraits/lego/0.jpg"},
    attachments: [(<GoogleMap key={0} />)]
  },
  {
    message: "Howdy!",
    user: {id: 2, username: "GeniusBot", avatar: GeniusBotImages['happy']},
    attachments: [(
      <GoogleMap key={0} />
    )]
  },
  {
    message: "I'd like directions, please.",
    user: {id: 1, username: "John", avatar: "https://randomuser.me/api/portraits/lego/0.jpg"},
    attachments: [(
      <GoogleMap key={0} />
    )],
    isFetching: true
  }
]

export {chatList};
