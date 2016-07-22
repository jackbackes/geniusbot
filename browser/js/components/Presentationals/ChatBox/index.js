'use strict'

import React from 'react';
import {ChatInput, GeniusBotImages, ChatProvider, Message} from './imports';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
const _ = require('lodash');
// mock data

const ChatBox = React.createClass({
  render(){
    let {messages, users, selfId} = this.props;
    let renderedMessages = messages.map(message => new Proxy(
      message,
      {
        get: (target, prop) => {
            if(prop === 'itemIndex') {
              return message.id
            } else if(prop === 'user') {
              return users.get(message.userId.toString())
            } else { return target[prop] }
          }
      }
    ));
    return(
      <List children={
        renderedMessages.map(
          chatItem => {
            return Message({
              message: chatItem.message,
              user: chatItem.user,
              attachments: chatItem.attachments,
              itemIndex: chatItem.itemIndex,
              selfId,
              isFetching: chatItem.isFetching
            })}
      )} />
    )
  }
})

export default ChatProvider(ChatBox);
